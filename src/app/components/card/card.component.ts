import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() bingoNumbers: any = null;
  @Input() player: any = null;
  @Output() callBingo = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  /** function call bingo */
  bingo(): void {
    this.callBingo.emit(this.player);
  }
}
