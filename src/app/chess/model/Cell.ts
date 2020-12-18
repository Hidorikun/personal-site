import {Piece} from "./Piece";

export class Cell {
  id: string;
  dark: boolean;
  piece: Piece;
  highlighted: boolean;

  constructor(id: string, black: boolean) {
    this.id = id;
    this.dark = black;
    this.highlighted = false;
  }
}
