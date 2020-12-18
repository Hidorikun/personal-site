import {IconDefinition} from "@fortawesome/fontawesome-common-types";

export class Piece {
  type: PieceTypesEnum;
  icon: IconDefinition;
  dark: boolean;

  constructor(type: PieceTypesEnum, icon: IconDefinition, black: boolean = false) {
    this.type = type;
    this.icon = icon;
    this.dark = black;
  }
}

export enum PieceTypesEnum {
  PAWN,
  KNIGHT,
  BISHOP,
  ROOK,
  QUEEN,
  KING
}
