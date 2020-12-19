import {IconDefinition} from "@fortawesome/fontawesome-common-types";

export class Piece {
  type: PieceTypesEnum;
  icon: IconDefinition;
  dark: boolean;
  wasMoved: boolean;

  constructor(type: PieceTypesEnum, icon: IconDefinition, black: boolean = false) {
    this.type = type;
    this.icon = icon;
    this.dark = black;
    this.wasMoved = false;
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

export enum PieceColorsEnum {
  LIGHT,
  DARK
}
