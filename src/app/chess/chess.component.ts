import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {

  ngOnInit() {
    console.log('something');
  }

  ngOnDestroy() {
    console.log('destroyed');
  }
}
