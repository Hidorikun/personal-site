import {Injectable} from '@angular/core';
import {Player} from "../model/Player";
import {Cell} from "../model/Cell";
import {Piece} from "../model/Piece";
import {faChessBishop, faChessKing, faChessKnight, faChessQueen, faChessRook} from "@fortawesome/free-solid-svg-icons";
import {faChessPawn} from "@fortawesome/free-solid-svg-icons/faChessPawn";
import {DirectionsEnum} from "../model/enums/DirectionsEnum";
import {PlayerColorEnum} from "../model/enums/PlayerColorEnum";
import {PieceTypeEnum} from "../model/enums/PieceTypeEnum";

@Injectable({
  providedIn: 'root'
})
export class ChessService {
  lightPlayer: Player;
  darkPlayer: Player;
  activePlayer: Player;
  victoriousPlayer: Player;

  board: Array<Array<Cell>>;
  selectedCell: Cell;
  draggedPiece: Piece;
  hightlightedCells = new Array<Cell>();
  lastMovedPiece: Piece;

  directions = new Map<DirectionsEnum, Array<[number, number]>>();
  rookDirections = new Array<Array<[number, number]>>();
  bishopDirections =  new Array<Array<[number, number]>>();
  knightMoves: Array<[number, number]>;
  kingMoves: Array<[number, number]>;
  piecesInCheck: Array<Piece>;
  selectionPieces: Array<Piece>;


  constructor() {
    this.lightPlayer = new Player(PlayerColorEnum.LIGHT);
    this.darkPlayer = new Player(PlayerColorEnum.DARK);

    this.createBoard();
    this.placePieces();
    this.setDirections();
    this.setSelectionPieces();

    this.activePlayer = this.lightPlayer;
    this.piecesInCheck = [];
  }

  selectCell(cell: Cell) {
    if (!!this.selectedCell) {
      this.selectedCell.highlighted = false;
    }

    this.selectedCell = cell;
    this.selectedCell.highlighted = true;
  }

  dragPiece(piece: Piece) {
    this.draggedPiece = piece;

    this.highlightValidCells(piece);
  }

  dropPiece(cell: Cell) {
    if (cell.highlighted && cell !== this.draggedPiece.cell) {
      if (!!cell.piece) {
        this.activePlayer.capturePiece(cell.piece);
      }

      if (this.draggedPiece.type === PieceTypeEnum.KING && !this.draggedPiece.hasMoved) {
        if (cell.row === this.draggedPiece.row) {
          if (cell.col === 2) {
            this.board[this.draggedPiece.row][3].placePiece(this.board[this.draggedPiece.row][0].piece)
          } else if (cell.col === 6) {
            this.board[this.draggedPiece.row][5].placePiece(this.board[this.draggedPiece.row][7].piece)
          }
        }
      }

      cell.placePiece(this.draggedPiece);
      this.lastMovedPiece = cell.piece;


      this.detectCheck();
      this.detectMate();

      if (!this.shouldUpdateLatestPiece()) {
        this.endTurn();
      }
    }

    this.removeHighlightedCells();
  }

  getPiecesInCheck() {
    return this.piecesInCheck;
  }

  shouldUpdateLatestPiece() {
    if (!!this.lastMovedPiece && this.lastMovedPiece.type === PieceTypeEnum.PAWN) {
      if (this.lastMovedPiece.row === 0 && this.lastMovedPiece.color == PlayerColorEnum.LIGHT) {
        return true;
      }

      if (this.lastMovedPiece.row === 7 && this.lastMovedPiece.color == PlayerColorEnum.DARK) {
        return true;
      }
    }

    return false;
  }

  upgradeLatestPiece(piece: Piece) {
    this.lastMovedPiece.type = piece.type;
    this.lastMovedPiece.icon = piece.icon;

    this.detectCheck();
    this.detectMate();

    this.endTurn();
  }

  // PRIVATE

  private highlightValidCells(piece: Piece) {
    this.removeHighlightedCells();

    for (let cell of this.getValidCells(piece)) {
      cell.highlighted = true;
      this.hightlightedCells.push(cell);
    }
  }

  private createBoard() {
    this.board = new Array<Array<Cell>>();
    for (let i = 0; i < 8; i++) {
      let row = new Array<any>();
      for (let j = 0; j < 8; j++) {
        row.push(new Cell(i % 2 !== j % 2, i, j));
      }
      this.board.push(row);
    }
  }

  private placePieces() {
    this.placeLightPieces();
    this.placeDarkPieces();
  }

  private placeLightPieces() {

    const king = new Piece(PieceTypeEnum.KING, faChessKing, this.board[7][4]);

    const lightPieces = [
      king,
      new Piece(PieceTypeEnum.ROOK, faChessRook, this.board[7][0]),
      new Piece(PieceTypeEnum.ROOK, faChessRook, this.board[7][7]),

      new Piece(PieceTypeEnum.KNIGHT, faChessKnight, this.board[7][1]),
      new Piece(PieceTypeEnum.KNIGHT, faChessKnight, this.board[7][6]),

      new Piece(PieceTypeEnum.BISHOP, faChessBishop, this.board[7][2]),
      new Piece(PieceTypeEnum.BISHOP, faChessBishop, this.board[7][5]),

      new Piece(PieceTypeEnum.QUEEN, faChessQueen, this.board[7][3])
    ];

    for (let j = 0; j < 8; j++) {
      lightPieces.push(new Piece(PieceTypeEnum.PAWN, faChessPawn, this.board[6][j]));
    }


    this.lightPlayer.setPieces(lightPieces);
    this.lightPlayer.king = king;

    lightPieces.forEach(piece => {
      this.board[piece.row][piece.col].piece = piece;

    });
  }

  private placeDarkPieces() {
    let king = new Piece(PieceTypeEnum.KING, faChessKing, this.board[0][4]);

    const darkPieces = [
      king,
      new Piece(PieceTypeEnum.ROOK, faChessRook, this.board[0][0]),
      new Piece(PieceTypeEnum.ROOK, faChessRook, this.board[0][7]),

      new Piece(PieceTypeEnum.KNIGHT, faChessKnight, this.board[0][1]),
      new Piece(PieceTypeEnum.KNIGHT, faChessKnight, this.board[0][6]),

      new Piece(PieceTypeEnum.BISHOP, faChessBishop, this.board[0][2]),
      new Piece(PieceTypeEnum.BISHOP, faChessBishop, this.board[0][5]),

      new Piece(PieceTypeEnum.QUEEN, faChessQueen, this.board[0][3])
    ];

    for (let j = 0; j < 8; j++) {
      darkPieces.push(new Piece(PieceTypeEnum.PAWN, faChessPawn, this.board[1][j]));
    }

    this.darkPlayer.setPieces(darkPieces);
    this.darkPlayer.king = king;

    darkPieces.forEach(piece => {
      this.board[piece.row][piece.col].piece = piece;
    });
  }


  private setSelectionPieces() {
    this.selectionPieces = [];
    this.selectionPieces.push(new Piece(PieceTypeEnum.KNIGHT, faChessKnight));
    this.selectionPieces.push(new Piece(PieceTypeEnum.BISHOP, faChessBishop));
    this.selectionPieces.push(new Piece(PieceTypeEnum.ROOK, faChessRook));
    this.selectionPieces.push(new Piece(PieceTypeEnum.QUEEN, faChessQueen));
  }

  private removeHighlightedCells() {
    this.hightlightedCells.forEach(cell => cell.highlighted = false);
    this.hightlightedCells = new Array<Cell>();
  }

  private detectCheck() {
    const lightDangerousEnemies = this.getDangerousEnemies(this.lightPlayer.king);

    if (lightDangerousEnemies.length != 0) {
      this.piecesInCheck = lightDangerousEnemies;
      this.piecesInCheck.push(this.lightPlayer.king);
      return;
    }

    const darkDangerousEnemies = this.getDangerousEnemies(this.darkPlayer.king);

    if (darkDangerousEnemies.length != 0) {
      this.piecesInCheck = darkDangerousEnemies;
      this.piecesInCheck.push(this.darkPlayer.king);
      return;
    }

    this.piecesInCheck = [];
  }

  private getDangerousEnemies(ourPiece: Piece) {
    const dangerousPieces = new Array<Piece>();

    for (let direction of this.bishopDirections) {
      const piece = this.getFirstPiece(direction, ourPiece);

      if (!!piece
        && this.areEnemies(ourPiece, piece)
        && (piece.type === PieceTypeEnum.BISHOP || piece.type === PieceTypeEnum.QUEEN)
      ) {
        dangerousPieces.push(piece);
      }
    }

    for (let direction of this.rookDirections) {
      const piece = this.getFirstPiece(direction, ourPiece);

      if (!!piece
        && this.areEnemies(ourPiece, piece)
        && (piece.type === PieceTypeEnum.ROOK || piece.type === PieceTypeEnum.QUEEN)
      ) {
        dangerousPieces.push(piece);
      }
    }

    for (let move of this.knightMoves) {
      const targetRow = ourPiece.row + move[0];
      const targetCol = ourPiece.col + move[1];

      if (this.onBoard(targetRow, targetCol)) {
        const cell = this.board[targetRow][targetCol];

        if (this.isEnemyPresent(ourPiece, cell) && (cell.piece.type === PieceTypeEnum.KNIGHT)) {
          dangerousPieces.push(cell.piece);
        }
      }
    }

    for (let move of this.kingMoves) {
      const targetRow = ourPiece.row + move[0];
      const targetCol = ourPiece.col + move[1];

      if (this.onBoard(targetRow, targetCol)) {
        const cell = this.board[targetRow][targetCol];

        if (this.isEnemyPresent(ourPiece, cell) && (cell.piece.type === PieceTypeEnum.KING)) {
          dangerousPieces.push(cell.piece);
        }
      }
    }

    const forward = ourPiece.color == PlayerColorEnum.DARK ? 1 : -1;

    for (let move of [[forward, -1], [forward, 1]]) {
      const targetRow = ourPiece.row + move[0];
      const targetCol = ourPiece.col + move[1];

      if (this.onBoard(targetRow, targetCol)) {
        const cell = this.board[targetRow][targetCol];

        if (this.isEnemyPresent(ourPiece, cell) && cell.piece.type === PieceTypeEnum.PAWN) {
          dangerousPieces.push(cell.piece);
        }
      }
    }

    return dangerousPieces;
  }

  private printBoard(board: Array<Array<Cell>>) {
    board.forEach(row => {
      console.log(row.map(cell => !!cell.piece ? cell.piece.type : ' '));
    });
  }

  private detectMate() {
    const enemyPlayer = this.activePlayer === this.lightPlayer ? this.darkPlayer : this.lightPlayer;

    if (this.piecesInCheck.includes(enemyPlayer.king) && !this.playerHasAvailableMoves(enemyPlayer)) {
      this.victoriousPlayer = this.activePlayer;
    }
  }

  private playerHasAvailableMoves(player: Player) {
    return player.pieces.some(piece => this.canMove(piece));
  }

  private canMove(piece: Piece) {
    return this.getValidCells(piece).length > 0;
  }

  private endTurn() {
    this.activePlayer = this.activePlayer === this.lightPlayer ? this.darkPlayer : this.lightPlayer;
  }

  // VALIDATORS

  private isNotFriendly(piece: Piece, cell: Cell): boolean {
    if (!!!cell.piece) {
      return true;
    }

    return cell.piece.color != piece.color;
  }

  private isEnemyPresent(piece: Piece, cell: Cell): boolean {
    return !!cell.piece && this.areEnemies(cell.piece, piece);
  }

  private areEnemies(a: Piece, b: Piece) {
    return a.color !== b.color;
  }

  private onBoard(targetRow, targetCol): boolean {
    return 0 <= targetRow && targetRow < 8 && 0 <= targetCol && targetCol < 8;
  }

  private isEmpty(cell: Cell): boolean {
    return !!!cell.piece;
  }

  private kingWouldBeSafe(movedPiece: Piece, targetCell: Cell): boolean {
    const king = movedPiece.owner.king === movedPiece ?
      new Piece(movedPiece.owner.king.type, null, targetCell, movedPiece.owner) : movedPiece.owner.king;

    for (let direction of this.bishopDirections) {
      const piece = this.getFirstPiece(direction, king, movedPiece, targetCell);

      if (!!piece
        && this.areEnemies(king, piece)
        && (piece.type === PieceTypeEnum.BISHOP || piece.type === PieceTypeEnum.QUEEN)
      ) {
        return false;
      }
    }

    for (let direction of this.rookDirections) {
      const piece = this.getFirstPiece(direction, king, movedPiece, targetCell);

      if (!!piece
        && this.areEnemies(king, piece)
        && (piece.type === PieceTypeEnum.ROOK || piece.type === PieceTypeEnum.QUEEN)
      ) {
        return false;
      }
    }

    for (let move of this.knightMoves) {
      const targetRow = king.row + move[0];
      const targetCol = king.col + move[1];

      if (this.onBoard(targetRow, targetCol)) {
        const cell = this.board[targetRow][targetCol];

        if (cell === targetCell) continue;

        if (this.isEnemyPresent(king, cell) && (cell.piece.type === PieceTypeEnum.KNIGHT)) {
          return false;
        }
      }
    }

    for (let move of this.kingMoves) {
      const targetRow = king.row + move[0];
      const targetCol = king.col + move[1];

      if (this.onBoard(targetRow, targetCol)) {
        const cell = this.board[targetRow][targetCol];

        if (cell === targetCell) continue;

        if (this.isEnemyPresent(king, cell) && (cell.piece.type === PieceTypeEnum.KING)) {
          return false;
        }
      }
    }

    const forward = king.color == PlayerColorEnum.DARK ? 1 : -1;

    for (let move of [[forward, -1], [forward, 1]]) {
      const targetRow = king.row + move[0];
      const targetCol = king.col + move[1];

      if (this.onBoard(targetRow, targetCol)) {
        const cell = this.board[targetRow][targetCol];

        if (this.isEnemyPresent(king, cell) && cell.piece.type === PieceTypeEnum.PAWN) {
          return false;
        }
      }
    }

    return true;
  }

  // PIECE MOVEMENT

  private setDirections() {
    Object.values(DirectionsEnum).forEach( direction => {
      this.directions.set(direction, []);
    });

    for (let i = 1; i < 8; i ++) {
      this.directions.get(DirectionsEnum.NORTH).push([-i, 0]);
      this.directions.get(DirectionsEnum.EAST).push([0, i]);
      this.directions.get(DirectionsEnum.SOUTH).push([i, 0]);
      this.directions.get(DirectionsEnum.WEST).push([0, -i]);
      this.directions.get(DirectionsEnum.SOUTH_EAST).push([i, i]);
      this.directions.get(DirectionsEnum.NORTH_EAST).push([-i, i]);
      this.directions.get(DirectionsEnum.SOUTH_WEST).push([i, -i]);
      this.directions.get(DirectionsEnum.NORTH_WEST).push([-i, -i]);
    }

    this.rookDirections = [
      this.directions.get(DirectionsEnum.NORTH),
      this.directions.get(DirectionsEnum.EAST),
      this.directions.get(DirectionsEnum.SOUTH),
      this.directions.get(DirectionsEnum.WEST),
    ];

    this.bishopDirections = [
      this.directions.get(DirectionsEnum.NORTH_WEST),
      this.directions.get(DirectionsEnum.NORTH_EAST),
      this.directions.get(DirectionsEnum.SOUTH_WEST),
      this.directions.get(DirectionsEnum.SOUTH_EAST),
    ];

    this.knightMoves = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]];

    this.kingMoves = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  }

  private getValidCells(piece: Piece): Array<Cell> {
    if (piece.type === PieceTypeEnum.PAWN) {
      return this.getPawnValidCells(piece);
    }
    if (piece.type === PieceTypeEnum.KNIGHT) {
      return this.getKnightValidCells(piece);
    }
    if (piece.type === PieceTypeEnum.ROOK) {
      return this.getRookValidCells(piece);
    }
    if (piece.type === PieceTypeEnum.BISHOP) {
      return this.getBishopValidCells(piece);
    }
    if (piece.type === PieceTypeEnum.QUEEN) {
      return this.getQueenValidCells(piece);
    }
    if (piece.type === PieceTypeEnum.KING) {
      return this.getKingValidCells(piece);
    }
  }

  private getKnightValidCells(knight: Piece): Array<Cell> {
    const validCells = new Array<Cell>();

    this.addPotentialValidCells(this.knightMoves, knight, validCells);

    return validCells;
  }

  private getPawnValidCells(pawn: Piece): Array<Cell> {
    const validCells = new Array<Cell>();

    const forward = pawn.color == PlayerColorEnum.DARK ? 1 : -1;

    if (this.onBoard(pawn.row + forward, pawn.col)) {
      let cell = this.board[pawn.row + forward][pawn.col];
      if (this.isEmpty(cell) && this.kingWouldBeSafe(pawn, cell)) {
        validCells.push(cell);

        if (this.onBoard(pawn.row + forward * 2, pawn.col)) {
          cell = this.board[pawn.row + forward * 2][pawn.col];
          if (this.isEmpty(cell) && this.kingWouldBeSafe(pawn, cell)) {
            if (!pawn.hasMoved) {
              validCells.push(cell)
            }
          }
        }
      }
    }

    for (let move of [[forward, -1], [forward, 1]]) {
      const targetRow = pawn.row + move[0];
      const targetCol = pawn.col + move[1];

      if (this.onBoard(targetRow, targetCol)) {
        const cell = this.board[targetRow][targetCol];
        if (this.isEnemyPresent(pawn, cell) && this.kingWouldBeSafe(pawn, cell)) {
          validCells.push(cell)
        }
      }
    }

    return validCells;
  }

  private getRookValidCells(rook: Piece): Array<Cell> {
    const validCells = new Array<Cell>();

    this.rookDirections.forEach( direction => {
      this.addDirectionValidCells(direction, rook, validCells);
    });

    return validCells;
  }

  private getBishopValidCells(bishop: Piece): Array<Cell> {
    const validCells = new Array<Cell>();

   this.bishopDirections.forEach( direction => {
      this.addDirectionValidCells(direction, bishop, validCells);
    });

    return validCells;
  }

  private getQueenValidCells(queen: Piece): Array<Cell> {
    const validCells = new Array<Cell>();

    this.directions.forEach( direction => {
      this.addDirectionValidCells(direction, queen, validCells);
    });

    return validCells;
  }

  private getKingValidCells(king: Piece): Array<Cell> {
    const validCells = new Array<Cell>();

    const potentialMoves = this.kingMoves;

    this.addPotentialValidCells(potentialMoves, king, validCells);

    // castle
    if (!king.hasMoved && !this.piecesInCheck.includes(king)) {

      let canLongCastle = true;

      if (!!this.board[king.row][0].piece && !this.board[king.row][0].piece.hasMoved) {
        for (let j = 1; j <= 3; j++) {
          const cell = this.board[king.row][king.col - j];
          if (!!cell.piece || !this.kingWouldBeSafe(king, cell)) {
            canLongCastle = false;
            break;
          }
        }
      }

      if (canLongCastle) {
        validCells.push(this.board[king.row][king.col - 2 ])
      }

      let canShortCastle = true;

      if (!!this.board[king.row][7].piece && !this.board[king.row][7].piece.hasMoved) {
        for (let j = 1; j <= 2; j++) {
          const cell = this.board[king.row][king.col + j];
          if (!!cell.piece || !this.kingWouldBeSafe(king, cell)) {
            canShortCastle = false;
            break;
          }
        }
      }

      if (canShortCastle) {
        validCells.push(this.board[king.row][king.col + 2 ])
      }
    }

    return validCells;
  }

  private addPotentialValidCells(potentialMoves, piece: Piece, validCells) {
    potentialMoves.forEach(move => {
      const newRow = piece.row + move[0];
      const newCol = piece.col + move[1];

      if (this.onBoard(newRow, newCol)) {
        const cell = this.board[newRow][newCol];
        if (this.isNotFriendly(piece, cell) && this.kingWouldBeSafe(piece, cell)) {
          validCells.push(cell);
        }
      }
    });
  }

  private addDirectionValidCells(direction, piece: Piece, validCells) {
    for (let move of direction) {
      const targetRow = piece.row + move[0];
      const targetCol = piece.col + move[1];

      if (!this.onBoard(targetRow, targetCol)) return;

      const cell = this.board[targetRow][targetCol];
      if (!!cell.piece) {
        if (this.areEnemies(piece, cell.piece) && this.kingWouldBeSafe(piece, cell)) {
          validCells.push(cell);
        }
        return;
      }

      if (this.kingWouldBeSafe(piece, cell)) {
        validCells.push(cell);
      }
    }
  }

  private getFirstPiece(direction: Array<[number, number]>, piece: Piece, movedPiece: Piece = null, targetCell: Cell = null): Piece {
    for (let move of direction) {
      const targetRow = piece.row + move[0];
      const targetCol = piece.col + move[1];

      if (!this.onBoard(targetRow, targetCol)) {
        return null;
      }

      const cell = this.board[targetRow][targetCol];

      if (cell === targetCell) {
        return movedPiece;
      }

      if (!!cell.piece && cell.piece !== movedPiece) {
        return cell.piece;
      }
    }
  }
}
