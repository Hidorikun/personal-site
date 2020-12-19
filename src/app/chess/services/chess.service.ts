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
      this.draggedPieceCell.piece = null;
      this.endTurn();
    }

    this.removeHighlightedCells();
  }

  private createBoard() {
    this.board = new Array<Array<Cell>>();
    for (let i = 0; i < 8; i++) {
      let row = new Array<any>();
      for (let j = 0; j < 8; j++) {
        row.push(new Cell(i % 2 !== j % 2));
      }
      this.board.push(row);
    }
  }

  private placePieces() {
    this.placeLightPieces();
    this.placeDarkPieces();
  }

  private placeLightPieces() {
    const lightPieces = [
      new Piece(PieceTypeEnum.ROOK, faChessRook, 7, 0),
      new Piece(PieceTypeEnum.ROOK, faChessRook, 7, 7),

      new Piece(PieceTypeEnum.KNIGHT, faChessKnight, 7, 1),
      new Piece(PieceTypeEnum.KNIGHT, faChessKnight, 7, 6),

      new Piece(PieceTypeEnum.BISHOP, faChessBishop, 7, 2),
      new Piece(PieceTypeEnum.BISHOP, faChessBishop, 7, 5),

      new Piece(PieceTypeEnum.QUEEN, faChessQueen, 7, 3),
      new Piece(PieceTypeEnum.KING, faChessKing, 7, 4),
    ];

    for (let j = 0; j < 8; j++) {
      lightPieces.push(new Piece(PieceTypeEnum.PAWN, faChessPawn, 6, j));
    }

    this.lightPlayer.setPieces(lightPieces);

    lightPieces.forEach(piece => {
      this.board[piece.row][piece.col].piece = piece;
    });
  }

  private placeDarkPieces() {
    const darkPieces = [
      new Piece(PieceTypeEnum.ROOK, faChessRook, 0, 0),
      new Piece(PieceTypeEnum.ROOK, faChessRook, 0, 7),

      new Piece(PieceTypeEnum.KNIGHT, faChessKnight, 0, 1),
      new Piece(PieceTypeEnum.KNIGHT, faChessKnight, 0, 6),

      new Piece(PieceTypeEnum.BISHOP, faChessBishop, 0, 2),
      new Piece(PieceTypeEnum.BISHOP, faChessBishop, 0, 5),

      new Piece(PieceTypeEnum.QUEEN, faChessQueen, 0, 3),
      new Piece(PieceTypeEnum.KING, faChessKing, 0, 4),
    ];

    for (let j = 0; j < 8; j++) {
      darkPieces.push(new Piece(PieceTypeEnum.PAWN, faChessPawn, 1, j));
    }

    this.darkPlayer.setPieces(darkPieces);

    darkPieces.forEach(piece => {
      this.board[piece.row][piece.col].piece = piece;
    });
  }

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

    return cell.piece.getColor() != piece.getColor();
  }

  private isEnemy(piece: Piece, cell: Cell): boolean {
    if (!!!cell.piece) {
      return false;
    }

    return cell.piece.getColor() != piece.getColor();
  }

  private onBoard(targetRow, targetCol) {
    return 0 <= targetRow && targetRow < 8 && 0 <= targetCol && targetCol < 8;
  }

  private isEmpty(cell: Cell) {
    return !!!cell.piece;
  }

  // PIECE MOVEMENT

  private getValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    if (piece.type === PieceTypeEnum.PAWN) {
      return this.getPawnValidCells(piece, row, col);
    }
    if (piece.type === PieceTypeEnum.KNIGHT) {
      return this.getKnightValidCells(piece, row, col);
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
      return this.getKingValidCells(piece, row, col);
    }
  }

  private getKnightValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

    const potentialMoves = [
      [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]
    ];

    for (let move of potentialMoves) {
      const targetRow = row + move[0];
      const targetCol = col + move[1];

      if (this.onBoard(targetRow, targetCol)) {
        const cell = this.board[targetRow][targetCol];

        if (this.isNotFriendly(piece, cell)) {
          validCells.push(cell);
        }
      }
    }

    return validCells;
  }

  private getPawnValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

    const forward = piece.getColor() == PlayerColorEnum.DARK ? 1 : -1;

    if (this.onBoard(row + forward, col)) {
      let cell = this.board[row + forward][col];
      if (this.isEmpty(cell)) {
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

    for (let direction of [[forward, -1], [forward, 1]]) {
      if (this.onBoard(row + direction[0], col + direction[1])) {
        const cell = this.board[row + direction[0]][col + direction[1]];
        if (this.isEnemy(piece, cell)) {
          validCells.push(cell)
        }
      }
    }

    return validCells;
  }

  private getRookValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

    const rookDirections = [
      this.directions.get(DirectionsEnum.NORTH),
      this.directions.get(DirectionsEnum.EAST),
      this.directions.get(DirectionsEnum.SOUTH),
      this.directions.get(DirectionsEnum.WEST),
    ];

    rookDirections.forEach( direction => {
      this.addDirectionValidCells(direction, row, col, piece, validCells);
    });

    return validCells;
  }

  private getBishopValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

    const bishopDirections = [
      this.directions.get(DirectionsEnum.NORTH_WEST),
      this.directions.get(DirectionsEnum.NORTH_EAST),
      this.directions.get(DirectionsEnum.SOUTH_WEST),
      this.directions.get(DirectionsEnum.SOUTH_EAST),
    ];

    bishopDirections.forEach( direction => {
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

  private getKingValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

    const potentialMoves = [[-1, -1],[-1, 0],[-1, 1],[0, -1],[0, 1],[1, -1],[1, 0],[1, 1]];

    potentialMoves.forEach( move => {
      const newRow = row + move[0];
      const newCol = col + move[1];

      if (this.onBoard(newRow, newCol)) {
        const cell = this.board[newRow][newCol];
        if (this.isNotFriendly(piece, cell)) {
          validCells.push(cell);
        }
      }
    });

    return validCells;
  }

  private addDirectionValidCells(direction, row: number, col: number, piece: Piece, validCells) {
    for (let move of direction) {
      const targetRow = row + move[0];
      const targetCol = col + move[1];

      if (this.onBoard(targetRow, targetCol)) {
        const cell = this.board[targetRow][targetCol];
        if (this.isNotFriendly(piece, cell)) {
          validCells.push(cell);

          if (this.isEnemy(piece, cell)) {
            break;
          }

          continue
        }
      }
      break;
    }
  }

}
