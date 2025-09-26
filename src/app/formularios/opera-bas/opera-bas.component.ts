import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-bas',
  standalone: false,
  templateUrl: './opera-bas.component.html',
  styleUrl: './opera-bas.component.css'
})
export class OperaBasComponent {
  op:string = "sumar";
  num1:string = "";
  num2:string = "";
  res:string = "";

  sumar():void{
    this.res = (parseInt(this.num1) + parseInt(this.num2)).toString();
  }
  restar():void{
    this.res = (parseInt(this.num1) - parseInt(this.num2)).toString();
  }
  multi():void{
    this.res = (parseInt(this.num1) * parseInt(this.num2)).toString();
  }
  div():void{
    this.res = (parseInt(this.num1) / parseInt(this.num2)).toString();
  }

  calcular(): void{
    switch (this.op){
      case "sumar":
        this.sumar()
        break;
      case "restar":
        this.restar()
        break;
      case "multi":
        this.multi()
        break;
      case "div":
        this.div()
        break;
    }
  }
}
