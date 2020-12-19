import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {PieceTypeEnum} from "./enums/PieceTypeEnum";
import {Player} from "./Player";

export class Piece {
  type: PieceTypeEnum;
  icon: IconDefinition;
  wasMoved: boolean;
  owner: Player;
  row: number;
  col: number;

  constructor(type: PieceTypeEnum, icon: IconDefinition, row: number, col: number) {
    this.type = type;
    this.icon = icon;
    this.wasMoved = false;
    this.row = row;
    this.col = col;
  }

  setOwner(owner: Player) {
    this.owner = owner;
  }

  getColor() {
    return this.owner.color;
  }
}




