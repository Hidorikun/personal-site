import {Component, OnInit} from '@angular/core';
import {ChessService} from "./services/chess.service";
import {Piece} from "./model/Piece";
import {PlayerColorEnum} from "./model/enums/PlayerColorEnum";
import {Cell} from "./model/Cell";
import {PieceTypeEnum} from "./model/enums/PieceTypeEnum";

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

  dragPiece(piece: Piece) {
    this.chessService.dragPiece(piece)
  }

  dragDisabled(piece: Piece) {
    return piece.owner != this.chessService.activePlayer;
  }

  getBoardClasses() {
    const classes = new Array<string>();

    classes.push('board');

    if (this.chessService.piecesInCheck.length > 0) {
      classes.push('red-glow');
    } else {
      classes.push(this.chessService.activePlayer === this.chessService.lightPlayer ? 'shadow-drop-bottom' : 'shadow-drop-top');
    }

    return classes;
  }

  getBoard() {
    return this.chessService.board;
  }

  getPieceClasses(piece: Piece) {
    const classes = new Array<string>();

    classes.push('fa-3x');
    classes.push(piece.color === PlayerColorEnum.DARK ? 'dark-piece' : 'light-piece');

    return classes;
  }

  getCellClasses(cell: Cell) {
    const classes = new Array<string>();

    classes.push(cell.dark ? 'dark-cell': '');
    classes.push(cell.highlighted ? 'highlighted' : '');
    classes.push(!!cell.piece ? 'piece-container' : '');
    classes.push(this.chessService.getPiecesInCheck().includes(cell.piece) ? 'check': '');

    return classes;
  }
}
