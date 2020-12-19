import { Injectable } from '@angular/core';
import {Player} from "../model/Player";

@Injectable({
  providedIn: 'root'
})
export class ChessService {
  players: Array<Player>;

  constructor() {}
}
