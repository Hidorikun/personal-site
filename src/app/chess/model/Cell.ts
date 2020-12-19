import {Piece} from "./Piece";

export class Cell {
  dark: boolean;
  piece: Piece;
  highlighted: boolean;

  constructor(dark: boolean) {
    this.dark = dark;
    this.highlighted = false;
  }
}
