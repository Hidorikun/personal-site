import {Piece, PieceColorsEnum} from "./Piece";

export class Player {
  pieces: Array<Piece>;
  color: PieceColorsEnum;

  constructor(pieces: Array<Piece>, color: PieceColorsEnum) {
    this.pieces = pieces;
    this.color = color;
  }

  removePiece(piece: Piece) {
    this.pieces = this.pieces.filter(p => p !== piece)
  }
}
