import {Piece} from "./Piece";
import {PlayerColorEnum} from "./enums/PlayerColorEnum";

export class Player {
  pieces: Array<Piece>;
  color: PlayerColorEnum;
  king: Piece;

  constructor(color: PlayerColorEnum) {
    this.color = color;
  }

  setPieces(pieces: Array<Piece>) {
    this.pieces = pieces;
    this.pieces.forEach(piece => {
      piece.owner = this
    })
  }

  removePiece(piece: Piece) {
    this.pieces = this.pieces.filter(p => p !== piece)
  }

}
