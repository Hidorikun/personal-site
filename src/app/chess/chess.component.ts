import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cell} from "./model/Cell";
import {Piece, PieceTypesEnum} from "./model/Piece";
import {faChessBishop, faChessKing, faChessKnight, faChessQueen, faChessRook} from "@fortawesome/free-solid-svg-icons";
import {faChessPawn} from "@fortawesome/free-solid-svg-icons/faChessPawn";
import {CdkDragStart} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit, OnDestroy {
  board: Array<Array<Cell>>;
  selectedCell: Cell;
  draggedPieceCell: Cell;
  hightlightedCells = new Array<Cell>();

  potentialMoves = new Map<PieceTypesEnum, Array<[number, number]>>();

  ngOnInit() {
    this.createBoard();
    this.placePieces();
    this.setPotentialMoves();
  }

  private createBoard() {
    this.board = new Array<Array<Cell>>();
    for (let i = 0; i < 8; i++) {
      let row = new Array<any>();
      for (let j = 0; j < 8; j++) {
        row.push(new Cell(this.getId(i, j), (i % 2 !== j % 2)));
      }
      this.board.push(row);
    }
  }

  private placePieces() {
    this.board[0][0].piece = new Piece(PieceTypesEnum.ROOK, faChessRook, true);
    this.board[0][7].piece = new Piece(PieceTypesEnum.ROOK, faChessRook, true);

    this.board[0][1].piece = new Piece(PieceTypesEnum.KNIGHT, faChessKnight, true);
    this.board[0][6].piece = new Piece(PieceTypesEnum.KNIGHT, faChessKnight, true);

    this.board[0][2].piece = new Piece(PieceTypesEnum.BISHOP, faChessBishop, true);
    this.board[0][5].piece = new Piece(PieceTypesEnum.BISHOP, faChessBishop, true);

    this.board[0][3].piece = new Piece(PieceTypesEnum.QUEEN, faChessQueen, true);
    this.board[0][4].piece = new Piece(PieceTypesEnum.KING, faChessKing, true);

    for (let j = 0; j < 8; j++) {
      this.board[j][j].piece = new Piece(PieceTypesEnum.PAWN, faChessPawn, true);
    }

    this.board[7][0].piece = new Piece(PieceTypesEnum.ROOK, faChessRook);
    this.board[7][7].piece = new Piece(PieceTypesEnum.ROOK, faChessRook);

    this.board[7][1].piece = new Piece(PieceTypesEnum.KNIGHT, faChessKnight );
    this.board[7][6].piece = new Piece(PieceTypesEnum.KNIGHT, faChessKnight);

    this.board[7][2].piece = new Piece(PieceTypesEnum.BISHOP, faChessBishop);
    this.board[7][5].piece = new Piece(PieceTypesEnum.BISHOP, faChessBishop);

    this.board[7][3].piece = new Piece(PieceTypesEnum.QUEEN, faChessQueen);
    this.board[7][4].piece = new Piece(PieceTypesEnum.KING, faChessKing);

    for (let j = 0; j < 8; j++) {
      this.board[6][j].piece = new Piece(PieceTypesEnum.PAWN, faChessPawn);
    }
  }

  private getId(i: number, j: number) {
    const a = 97;

    return i + String.fromCharCode(a + j);
  }

  selectCell(cell: Cell) {
    if (!!this.selectedCell) {
      this.selectedCell.highlighted = false;
    }

    this.selectedCell = cell;
    this.selectedCell.highlighted = true;
  }

  dragPiece(event: CdkDragStart, row: number, col: number) {
    this.draggedPieceCell = this.board[row][col];

    this.highlightValidCells(row, col);
  }

  private highlightValidCells(row: number, col: number) {
    this.removeHighlightedCells();

    const piece = this.board[row][col].piece;

    for (let move of this.getPotentialMoves(piece)) {
      let targetRow = row + move[0];
      let targetCol = col + move[1];

      if (0 <= targetRow && targetRow < 8 && 0 <= targetCol && targetCol < 8) {
        this.board[targetRow][targetCol].highlighted = true;
        this.hightlightedCells.push(this.board[targetRow][targetCol]);

      }
    }
  }

  private removeHighlightedCells() {
    this.hightlightedCells.forEach(cell => cell.highlighted = false);
    this.hightlightedCells = new Array<Cell>();
  }

  private getPotentialMoves(piece: Piece): Array<[number, number]> {
    return this.potentialMoves.get(piece.type);
  }

  dropPiece(cell: Cell) {
    if (cell.highlighted && cell !== this.draggedPieceCell) {
      cell.piece = this.draggedPieceCell.piece;
      this.draggedPieceCell.piece = null;
    }

    this.removeHighlightedCells();
  }

  ngOnDestroy() {
    console.log('destroyed');
  }

  private setPotentialMoves() {
    this.potentialMoves.set(PieceTypesEnum.PAWN, [
      [-1, 0], [-2, 0], [-1, -1], [-1, 1]
    ]);

    this.potentialMoves.set(PieceTypesEnum.KING, [
      [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]
    ]);

    this.potentialMoves.set(PieceTypesEnum.KNIGHT, [
      [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]
    ]);

    let cross = [];
    let diagonal = [];
    for (let i = 0; i < 7; i ++) {
      cross.push([-i, 0]);
      cross.push([0, i]);
      cross.push([i, 0]);
      cross.push([0, -i]);

      diagonal.push([i, i]);
      diagonal.push([-i, i]);
      diagonal.push([i, -i]);
      diagonal.push([-i, -i]);
    }

    this.potentialMoves.set(PieceTypesEnum.QUEEN, cross.concat(diagonal));
    this.potentialMoves.set(PieceTypesEnum.BISHOP, diagonal);
    this.potentialMoves.set(PieceTypesEnum.ROOK, cross);

  }
}
