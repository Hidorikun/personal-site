import {Piece} from "./Piece";
import {PlayerColorEnum} from "./enums/PlayerColorEnum";

export class Player {
  pieces: Array<Piece>;
  capturedPieces: Array<Piece>;
  color: PlayerColorEnum;
  king: Piece;

  constructor(color: PlayerColorEnum) {
    this.color = color;
    this.capturedPieces = [];
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

  capturePiece(piece:Piece) {
    this.capturedPieces.push(piece);
    piece.owner.removePiece(piece);
  }
}
