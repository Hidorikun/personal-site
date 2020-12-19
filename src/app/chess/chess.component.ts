import {Component, OnDestroy, OnInit} from '@angular/core';
import {Cell} from "./model/Cell";
import {Piece, PieceTypesEnum} from "./model/Piece";
import {faChessBishop, faChessKing, faChessKnight, faChessQueen, faChessRook} from "@fortawesome/free-solid-svg-icons";
import {faChessPawn} from "@fortawesome/free-solid-svg-icons/faChessPawn";
import {CdkDragStart} from "@angular/cdk/drag-drop";
import {DirectionsEnum} from "./model/DirectionsEnum";
import {ChessService} from "./services/chess.service";

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
  isDarksTurn = false;

  constructor(private chessService: ChessService) {}

  directions = new Map<DirectionsEnum, Array<[number, number]>>();

  ngOnInit() {
    this.createBoard();
    this.placePieces();
    this.setDirections();
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
      this.board[1][j].piece = new Piece(PieceTypesEnum.PAWN, faChessPawn, true);
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

    // for (let move of this.getPotentialMoves(piece)) {
    //   let targetRow = row + move[0];
    //   let targetCol = col + move[1];
    //
    //   if (0 <= targetRow && targetRow < 8 && 0 <= targetCol && targetCol < 8) {
    //     this.board[targetRow][targetCol].highlighted = true;
    //     this.hightlightedCells.push(this.board[targetRow][targetCol]);
    //   }
    // }

    for (let cell of this.getValidCells(piece, row, col)) {
      cell.highlighted = true;
      this.hightlightedCells.push(cell);
    }
  }

  private removeHighlightedCells() {
    this.hightlightedCells.forEach(cell => cell.highlighted = false);
    this.hightlightedCells = new Array<Cell>();
  }

  dropPiece(cell: Cell) {
    if (cell.highlighted && cell !== this.draggedPieceCell) {
      cell.piece = this.draggedPieceCell.piece;
      cell.piece.wasMoved = true;
      this.draggedPieceCell.piece = null;
    }

    this.removeHighlightedCells();
  }

  ngOnDestroy() {
    console.log('destroyed');
  }

  private setDirections() {

    Object.values(DirectionsEnum).forEach( direction => {
      this.directions.set(direction, []);
    });

    for (let i = 1; i < 8; i ++) {
      this.directions.get(DirectionsEnum.NORTH).push([-i, 0]);
      this.directions.get(DirectionsEnum.EAST).push([0, i]);
      this.directions.get(DirectionsEnum.SOUTH).push([i, 0]);
      this.directions.get(DirectionsEnum.WEST).push([0, -i]);
      this.directions.get(DirectionsEnum.SOUTH_EAST).push([i, i]);
      this.directions.get(DirectionsEnum.NORTH_EAST).push([-i, i]);
      this.directions.get(DirectionsEnum.SOUTH_WEST).push([i, -i]);
      this.directions.get(DirectionsEnum.NORTH_WEST).push([-i, -i]);
    }
  }

  private getValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    if (piece.type === PieceTypesEnum.PAWN) {
      return this.getPawnValidCells(piece, row, col);
    }

    if (piece.type === PieceTypesEnum.KNIGHT) {
      return this.getKnightValidCells(piece, row, col);
    }

    if (piece.type === PieceTypesEnum.ROOK) {
      return this.getRookValidCells(piece, row, col);
    }

    if (piece.type === PieceTypesEnum.BISHOP) {
      return this.getBishopValidCells(piece, row, col);
    }

    if (piece.type === PieceTypesEnum.QUEEN) {
      return this.getQueenValidCells(piece, row, col);
    }

    if (piece.type === PieceTypesEnum.KING) {
      return this.getKingValidCells(piece, row, col);
    }
  }

  private isNotFriendly(piece: Piece, cell: Cell): boolean {
    if (!!!cell.piece) {
      return true;
    }

    return cell.piece.dark != piece.dark;
  }

  private isEnemy(piece: Piece, cell: Cell): boolean {
    if (!!!cell.piece) {
      return false;
    }

    return cell.piece.dark != piece.dark;
  }

  private onBoard(targetRow, targetCol) {
    return 0 <= targetRow && targetRow < 8 && 0 <= targetCol && targetCol < 8;
  }

  private valid(piece: Piece, cell: Cell, validators: Array<(piece: Piece, cell: Cell) => boolean>) {
    return validators
      .map(validator => validator(piece, cell))
      .every(validationResult => validationResult === true);
  }

  private getKnightValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

    const potentialMoves = [
      [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]
    ];

    const validators = [
      this.isNotFriendly
    ];

    for (let move of potentialMoves) {
        const targetRow = row + move[0];
        const targetCol = col + move[1];

        if (this.onBoard(targetRow, targetCol)) {
          const cell = this.board[targetRow][targetCol];

          if (this.valid(piece, cell, validators)) {
            validCells.push(cell);
          }
        }
    }

    return validCells;
  }

  private getPawnValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

    const forward = piece.dark ? 1 : -1;

    if (this.onBoard(row + forward, col)) {
      let cell = this.board[row + forward][col];
      if (this.isNotFriendly(piece, cell) && !this.isEnemy(piece, cell)) {
        validCells.push(this.board[row + forward][col]);

        if (this.onBoard(row + forward * 2, col)) {
          cell = this.board[row + forward * 2][col];
          if (this.isNotFriendly(piece, cell)) {
            if (!piece.wasMoved) {
              validCells.push(cell)
            }
          }
        }
      }
    }

    for (let direction of [[forward, -1], [forward, 1]]) {
      if (this.onBoard(row + direction[0], col + direction[1])) {
        const cell = this.board[row + direction[0]][col + direction[1]];
        if (this.isEnemy(piece, cell)) {
          validCells.push(cell)
        }
      }
    }

    return validCells;
  }

  private getRookValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

    const rookDirections = [
      this.directions.get(DirectionsEnum.NORTH),
      this.directions.get(DirectionsEnum.EAST),
      this.directions.get(DirectionsEnum.SOUTH),
      this.directions.get(DirectionsEnum.WEST),
    ];

    rookDirections.forEach( direction => {
      this.addDirectionValidCells(direction, row, col, piece, validCells);
    });

    return validCells;
  }

  private getBishopValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

    const bishopDirections = [
      this.directions.get(DirectionsEnum.NORTH_WEST),
      this.directions.get(DirectionsEnum.NORTH_EAST),
      this.directions.get(DirectionsEnum.SOUTH_WEST),
      this.directions.get(DirectionsEnum.SOUTH_EAST),
    ];

    bishopDirections.forEach( direction => {
      this.addDirectionValidCells(direction, row, col, piece, validCells);
    });

    return validCells;
  }

  private getQueenValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

    this.directions.forEach( direction => {
      this.addDirectionValidCells(direction, row, col, piece, validCells);
    });

    return validCells;
  }

  private getKingValidCells(piece: Piece, row: number, col: number): Array<Cell> {
    const validCells = new Array<Cell>();

    const potentialMoves = [[-1, -1],[-1, 0],[-1, 1],[0, -1],[0, 1],[1, -1],[1, 0],[1, 1]];

    potentialMoves.forEach( move => {
      const newRow = row + move[0];
      const newCol = col + move[1];

      if (this.onBoard(newRow, newCol)) {
        const cell = this.board[newRow][newCol];
        if (this.isNotFriendly(piece, cell)) {
          validCells.push(cell);
        }
      }
    });

    return validCells;
  }

  private addDirectionValidCells(direction, row: number, col: number, piece: Piece, validCells) {
    for (let move of direction) {
      const targetRow = row + move[0];
      const targetCol = col + move[1];

      if (this.onBoard(targetRow, targetCol)) {
        const cell = this.board[targetRow][targetCol];
        if (this.isNotFriendly(piece, cell)) {
          validCells.push(cell);

          if (this.isEnemy(piece, cell)) {
            break;
          }

          continue
        }
      }
      break;
    }
  }
}
