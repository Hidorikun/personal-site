import {Component, OnInit} from '@angular/core';
import {ChessService} from "./services/chess.service";
import {Piece} from "./model/Piece";

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit{

  constructor(private chessService: ChessService) {}

  ngOnInit() {}

  dropPiece(cell: any) {
    this.chessService.dropPiece(cell)
  }

  dragPiece(row: number, col: number) {
    this.chessService.dragPiece(row, col)
  }

  dragDisabled(piece: Piece) {
    return piece.owner != this.chessService.activePlayer;
  }

  getBoardClasses() {
    if (this.chessService.activePlayer === this.chessService.lightPlayer) {
      return 'shadow-drop-bottom'
    }

    return 'shadow-drop-top'
  }
}
