import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  display: number = 0;
  field: string = "0";
  signs: string = "";

  addSignApp(sign) {
    let leng: number = this.signs.length - 1;

    if(sign==="+" || sign==="-" || sign==="*" || sign==="/"){
      if (!(this.signs[leng] === "|")){
        this.signs = this.signs + "|" + sign + "|";
      } else {
        return;
        }
    } else if (sign===","){
      let arr: Array<any> = this.signs.split("|")
      let end: string = arr[arr.length - 1];
      if(!end.includes(".") && !(this.signs[leng] === "|")){
        this.signs = this.signs + ".";
      }
    } else {
      this.signs = this.signs + sign;
    }
    this.field = this.signs.split("|").join("");
  }

  toEqualsApp() {
    let arr: Array<any> = this.signs.split("|")
    let num_a: number = +arr[0];
    let num_b: number;
    let result: number = 0;

      for(let i = 1; i < arr.length; i++){
        if (!(arr[i]==="+" || arr[i]==="-" || arr[i]==="*" || arr[i]==="/")){
          //--Continue--
        } else if (arr[i]==="+") {
          num_b = +arr[i + 1]
          result = this.plus(num_a, num_b);
          num_a = result;
        } else if (arr[i]==="-"){
          num_b = +arr[i + 1]
          result = this.minus(num_a, num_b);
          num_a = result;
        } else if (arr[i]==="*"){
          num_b = +arr[i + 1]
          result = this.multiplication(num_a, num_b);
          num_a = result;
        } else if (arr[i]==="/"){
          num_b = +arr[i + 1]
          result = this.division(num_a, num_b);
          num_a = result;
        }
      }
    this.display = result;
  }
  
  plus(a:number, b:number){
    return a + b;
  }
  minus(a:number, b:number){
    return a - b;
  }
  multiplication(a:number, b:number){
    return a * b;
  }
  division(a:number, b:number){
    return a / b;
  }

  toClearApp() {
    this.signs = "";
    this.field = "0";
    this.display = 0;
  }

  toEraseApp(){
    if(this.signs[this.signs.length - 1] === "|"){
      this.field = this.field.slice(0, this.field.length - 1);
      this.signs = this.signs.slice(0, this.signs.length - 3);
    } else {
    this.field = this.field.slice(0, this.field.length - 1);
    this.signs = this.signs.slice(0, this.signs.length - 1);
    }
  }
}
