import {Component, OnInit} from '@angular/core';
import {ChessService} from "./services/chess.service";
import {Piece} from "./model/Piece";
import {PlayerColorEnum} from "./model/enums/PlayerColorEnum";
import {Cell} from "./model/Cell";
import {PieceTypeEnum} from "./model/enums/PieceTypeEnum";
import {faBookmark} from "@fortawesome/free-solid-svg-icons/faBookmark";

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit{
  faBookmark = faBookmark;

  constructor(private chessService: ChessService) {}

  ngOnInit() {}

  dropPiece(cell: any) {
    this.chessService.dropPiece(cell)
  }

  dragPiece(piece: Piece) {
    this.chessService.dragPiece(piece)
  }

  pieceDisabled(piece: Piece) {
    return (piece.owner != this.chessService.activePlayer)
      || this.shouldUpdateLatestPiece()
      || this.gameEnded();
  }

  getBoardClasses() {
    const classes = new Array<string>();

    classes.push('board');

    if (this.gameEnded()) {
      classes.push('green-glow')
    } else if (this.chessService.piecesInCheck.length > 0) {
      classes.push('red-glow');
    } else {
      classes.push(this.chessService.activePlayer === this.chessService.lightPlayer ? 'shadow-drop-bottom' : 'shadow-drop-top');
    }

    return classes;
  }

  shouldUpdateLatestPiece() {
    return this.chessService.shouldUpdateLatestPiece();
  }

  gameEnded() {
    // return true;
    return !!this.chessService.victoriousPlayer;
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

  getDialogPieceClasses(piece: Piece) {
    const classes = new Array<string>();

    classes.push('fa-5x');
    classes.push('dialog-piece');
    classes.push(piece.color === PlayerColorEnum.DARK ? 'dark-piece' : 'light-piece');
    classes.push(piece.type === PieceTypeEnum.KING || piece.type === PieceTypeEnum.QUEEN ? 'l-30' : 'l-35');

    return classes;
  }

  getSelectionPieceClasses(piece: Piece) {
    const classes = new Array<string>();

    classes.push('fa-4x');
    classes.push(this.chessService.activePlayer.color === PlayerColorEnum.DARK ? 'dark-piece' : 'light-piece');
    classes.push('selection-piece');

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

  getlastMovedPiece() {
    return this.chessService.lightPlayer.king;
    return this.chessService.lastMovedPiece;
  }

  getVictoryMessage() {
    return this.chessService.victoriousPlayer === this.chessService.lightPlayer ?
      "White wins!" : "Black wins!";
  }

  getDarkCapturedPieces() {
    return this.chessService.darkPlayer.capturedPieces;
  }

  getLightCapturedPieces() {
    return this.chessService.lightPlayer.capturedPieces;
  }

  getPieceSelection() {
    return this.chessService.selectionPieces;
  }

  selectPiece(piece: Piece) {
    this.chessService.upgradeLatestPiece(piece);
  }
}
