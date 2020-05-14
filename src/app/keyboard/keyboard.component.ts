import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  arrButton: Array<Array<number>> = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3]
  ];

  @Output() addSignApp = new EventEmitter();
  addSign(sign){
    this.addSignApp.emit(sign);
  }
  @Output() toClearApp = new EventEmitter();
  toClear(){
    this.toClearApp.emit();
  }
  @Output() toEqualsApp = new EventEmitter();
  toEquals(){
    this.toEqualsApp.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
