import {Piece} from "./Piece";

export class Cell {
  dark: boolean;
  piece: Piece;
  highlighted: boolean;
  row: number;
  col: number;

  constructor(dark: boolean, row: number, col: number) {
    this.dark = dark;
    this.highlighted = false;
    this.row = row;
    this.col = col;
  }

  placePiece(piece: Piece) {
    this.piece = piece;
    this.piece.cell = this;
    this.piece.wasMoved = true;
  }
}
