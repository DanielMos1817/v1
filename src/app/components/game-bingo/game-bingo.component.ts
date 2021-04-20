import {Component, OnInit} from '@angular/core';
import {CardInterface} from '../models/card.interface';

@Component({
  selector: 'app-game-bingo',
  templateUrl: './game-bingo.component.html',
  styleUrls: ['./game-bingo.component.css']
})
export class GameBingoComponent implements OnInit {

  calledNumbers: number[] = []; // numeros llamados en el bingo
  newNumber = ''; // nuevo numero originado
  countNumbersGenerate = 0; // cantidad de numeros llamados
  cards: CardInterface[] = []; // tarjetas de bingo

  constructor() {
  }

  ngOnInit(): void {
  }

  /** Generate new number  */  // Complejidad O(n^2)
  getNewNumber(): void {
    if (this.countNumbersGenerate < 75) {
      let generateNumber = this.generateNewNumber(1, 76);
      while (this.calledNumbers.indexOf(generateNumber) > -1) {
        generateNumber = this.generateNewNumber(1, 76);
      }
      this.calledNumbers.push(generateNumber);
      this.newNumber = generateNumber + '';
      this.countNumbersGenerate++;
    }
  }

  /** Function function generates a number between a range */
  generateNewNumber(min: number, max: number): number {
    return (Math.floor(Math.random() * (max - min)) + min);
  }

  /** Function generate array of numbers no repeat */ // complejidad O(n^2)
  // tslint:disable-next-line:variable-name
  getArrayNumbers(min: number, max: number, count_numbers: number): any[] {
    const arrayNumbers: any[] = [];
    for (let i = 0; i < count_numbers; i++) {
      let newNumber = this.generateNewNumber(min, max);
      while (arrayNumbers.indexOf(newNumber) > -1) {
        newNumber = this.generateNewNumber(min, max);
      }
      arrayNumbers.push(newNumber);
    }
    return arrayNumbers;
  }

  /** Create new card Bingo */ // Complejidad O(n^2)
  generateCard(): void {
    const card: CardInterface = {
      colB: this.getArrayNumbers(1, 16, 5),
      colI: this.getArrayNumbers(16, 31, 5),
      colN: this.getArrayNumbers(31, 46, 5),
      colG: this.getArrayNumbers(46, 61, 5),
      colO: this.getArrayNumbers(61, 76, 5),
    };
    // @ts-ignore
    card.colN[2] = 'FREE';
    this.cards.push(card);
  }

  /** Function to check card Bingo */ // complejidad O(n)
  checkBingo(player: number): void {
    const card: CardInterface = this.cards[player - 1];
    let message = 'El jugador ' + player + ' es el gandor';
    for (let i = 0; i < 5; i++) {
      // @ts-ignore
      if (this.calledNumbers.indexOf(card?.colB[i]) === -1) {
        message = 'El jugador ' + player + ' no es el ganador';
        break;
      }
      // @ts-ignore
      if (this.calledNumbers.indexOf(card?.colI[i]) === -1) {
        message = 'El jugador ' + player + ' no es el ganador';
        break;
      }
      // @ts-ignore
      if (this.calledNumbers.indexOf(card?.colN[i]) === -1 && card.colN[i] !== 'FREE') {
        message = 'El jugador ' + player + ' no es el ganador';
        break;
      }
      // @ts-ignore
      if (this.calledNumbers.indexOf(card?.colG[i]) === -1) {
        message = 'El jugador ' + player + ' no es el ganador';
        break;
      }
      // @ts-ignore
      if (this.calledNumbers.indexOf(card?.colO[i]) === -1) {
        message = 'El jugador ' + player + ' no es el ganador';
        break;
      }
    }
    alert(message);
  }
}
