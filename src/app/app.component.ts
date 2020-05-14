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

  addSign(sign) {

    let leng: number = this.signs.length - 1;

    if(sign==="+" || sign==="-" || sign==="*" || sign==="/"){
      if (!(this.signs[leng] === "|")){
        this.signs = this.signs + "|" + sign + "|";
        console.log("add")
      } else {
        console.log("double sign")
        return;
        }
    } else {
      this.signs = this.signs + sign;
    }
    this.field = this.signs.split("|").join("");
    //console.log("-----");
  }

  toEquals() {
    let arr: Array<any> = this.signs.split("|")
    let num_a: number = +arr[0];
    let num_b: number;
    let result: number = 0;

      for(let i = 1; i < arr.length; i++){
        if (!(arr[i]==="+" || arr[i]==="-" || arr[i]==="*" || arr[i]==="/")){
          console.log("num_b = +arr[i];")
        } else if (arr[i]==="+") {
          num_b = +arr[i + 1]
          result = this.plus(num_a, num_b);
          num_a = result;
          console.log("Вызов плюса", result, typeof(num_a), typeof(num_b))
        } else if (arr[i]==="-"){
          num_b = +arr[i + 1]
          result = this.minus(num_a, num_b);
          num_a = result;
          console.log("Вызов минуса", result, typeof(num_a), typeof(num_b))
        } else if (arr[i]==="*"){
          num_b = +arr[i + 1]
          result = this.multiplication(num_a, num_b);
          num_a = result;
          console.log("Вызов умножения", result, typeof(num_a), typeof(num_b))
        } else if (arr[i]==="/"){
          num_b = +arr[i + 1]
          result = this.division(num_a, num_b);
          num_a = result;
          console.log("Вызов деления", result, typeof(num_a), typeof(num_b))
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
  toClear() {
    this.signs = "";
    this.field = "0";
    this.display = 0;
  }
}