import {Piece} from "./Piece";
import {PlayerColorEnum} from "./enums/PlayerColorEnum";
import {PlayerTypeEnum} from "./enums/PlayerTypeEnum";

export class Player {
  type: PlayerTypeEnum;
  pieces: Array<Piece>;
  capturedPieces: Array<Piece>;
  color: PlayerColorEnum;
  king: Piece;

  constructor(color: PlayerColorEnum, type = PlayerTypeEnum.HUMAN) {
    this.color = color;
    this.capturedPieces = [];
    this.type = type;
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
