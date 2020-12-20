import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {PieceTypeEnum} from "./enums/PieceTypeEnum";
import {Player} from "./Player";
import {Cell} from "./Cell";

export class Piece {
  type: PieceTypeEnum;
  icon: IconDefinition;
  wasMoved: boolean;
  owner: Player;
  cell: Cell;

  constructor(type: PieceTypeEnum, icon: IconDefinition, cell: Cell, owner: Player = null) {
    this.type = type;
    this.icon = icon;
    this.wasMoved = false;
    this.cell = cell;
    this.owner = owner;
  }

  get color() {
    return this.owner.color;
  }

  get row() {
    return this.cell.row;
  }

  get col() {
    return this.cell.col;
  }
}




