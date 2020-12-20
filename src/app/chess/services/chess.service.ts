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

  board: Array<Array<Cell>>;
  selectedCell: Cell;
  draggedPieceCell: Cell;
  hightlightedCells = new Array<Cell>();

  directions = new Map<DirectionsEnum, Array<[number, number]>>();
  rookDirections = new Array<Array<[number, number]>>();
  bishopDirections =  new Array<Array<[number, number]>>();
  knightMoves: Array<[number, number]>;
  kingMoves: Array<[number, number]>;

  constructor() {
    this.lightPlayer = new Player(PlayerColorEnum.LIGHT);
    this.darkPlayer = new Player(PlayerColorEnum.DARK);

    this.createBoard();
    this.placePieces();
    this.setDirections();

    this.activePlayer = this.lightPlayer;
  }

  selectCell(cell: Cell) {
    if (!!this.selectedCell) {
      this.selectedCell.highlighted = false;
    }

    this.selectedCell = cell;
    this.selectedCell.highlighted = true;
  }

  dragPiece(row: number, col: number) {
    this.draggedPieceCell = this.board[row][col];

    this.highlightValidCells(row, col);
  }

  dropPiece(cell: Cell) {
    if (cell.highlighted && cell !== this.draggedPieceCell) {
      cell.piece = this.draggedPieceCell.piece;
      cell.piece.wasMoved = true;
      cell.piece.cell = cell;
      this.draggedPieceCell.piece = null;
      this.endTurn();
    }

    this.removeHighlightedCells();
  }

  // PRIVATE

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

  private highlightValidCells(row: number, col: number) {
    this.removeHighlightedCells();

    const piece = this.board[row][col].piece;

    for (let cell of this.getValidCells(piece, row, col)) {
      cell.highlighted = true;
      this.hightlightedCells.push(cell);
    }
  }

  private removeHighlightedCells() {
    this.hightlightedCells.forEach(cell => cell.highlighted = false);
    this.hightlightedCells = new Array<Cell>();
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
    const king = this.activePlayer.king === movedPiece ?
      new Piece(this.activePlayer.king.type, null, targetCell, this.activePlayer) : this.activePlayer.king;

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

  private getValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    if (piece.type === PieceTypeEnum.PAWN) {
      return this.getPawnValidCells(piece, row, col);
    }
    if (piece.type === PieceTypeEnum.KNIGHT) {
      return this.getKnightValidCells(piece);
    }
    if (piece.type === PieceTypeEnum.ROOK) {
      return this.getRookValidCells(piece, row, col);
    }
    if (piece.type === PieceTypeEnum.BISHOP) {
      return this.getBishopValidCells(piece, row, col);
    }
    if (piece.type === PieceTypeEnum.QUEEN) {
      return this.getQueenValidCells(piece, row, col);
    }
    if (piece.type === PieceTypeEnum.KING) {
      return this.getKingValidCells(piece);
    }
  }

  private getKnightValidCells(piece: Piece): Array<Cell> {
    const validCells = new Array<Cell>();

    this.addPotentialValidCells(this.knightMoves, piece, validCells);

    return validCells;
  }

  private getPawnValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

    const forward = piece.color == PlayerColorEnum.DARK ? 1 : -1;

    if (this.onBoard(row + forward, col)) {
      let cell = this.board[row + forward][col];
      if (this.isEmpty(cell) && this.kingWouldBeSafe(piece, cell)) {
        validCells.push(cell);

        if (this.onBoard(row + forward * 2, col)) {
          cell = this.board[row + forward * 2][col];
          if (this.isEmpty(cell)) {
            if (!piece.wasMoved) {
              validCells.push(cell)
            }
          }
        }
      }
    }

    for (let move of [[forward, -1], [forward, 1]]) {
      if (this.onBoard(row + move[0], col + move[1])) {
        const cell = this.board[row + move[0]][col + move[1]];
        if (this.isEnemyPresent(piece, cell) && this.kingWouldBeSafe(piece, cell)) {
          validCells.push(cell)
        }
      }
    }

    return validCells;
  }

  private getRookValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

    this.rookDirections.forEach( direction => {
      this.addDirectionValidCells(direction, row, col, piece, validCells);
    });

    return validCells;
  }

  private getBishopValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

   this.bishopDirections.forEach( direction => {
      this.addDirectionValidCells(direction, row, col, piece, validCells);
    });

    return validCells;
  }

  private getQueenValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

    this.directions.forEach( direction => {
      this.addDirectionValidCells(direction, row, col, piece, validCells);
    });

    return validCells;
  }

  private getKingValidCells(piece: Piece): Array<Cell> {
    const validCells = new Array<Cell>();

    const potentialMoves = this.kingMoves;

    this.addPotentialValidCells(potentialMoves, piece, validCells);

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

  private addDirectionValidCells(direction, row: number, col: number, piece: Piece, validCells) {
    for (let move of direction) {
      const targetRow = row + move[0];
      const targetCol = col + move[1];

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

  private getFirstPiece(direction: Array<[number, number]>, piece: Piece, movedPiece: Piece, targetCell: Cell): Piece {
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
