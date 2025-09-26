import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre: string = "";
  boletos: number = 0;
  cantidad: number = 0;
  op: string = "";
  resultado: number = 0;
  costo: number = 12.00;
  descuento: number = 0.0;
  limite: number = 0;
  lim: number = 7;

  Pagar(): void {
    this.limite = this.cantidad * this.lim;

    if (this.boletos <= this.limite) {
      if (this.op === "si") {
        this.descuentos()
      }
      else{
        this.descuentos()
      }
    }
    else {
      this.resultado = 0
    }
  }
  descuentos(): void {
    switch (this.op) {
      case "si":
        if (this.boletos > 0 && this.boletos <= 2) {
          this.descuento = (this.boletos * this.costo) * .10;
          this.resultado = (this.boletos * this.costo) - this.descuento;
        }
        if (this.boletos >= 3 && this.boletos <= 5) {
          this.descuento = (this.boletos * this.costo) * .10;
          this.resultado = (this.boletos * this.costo) - this.descuento;
          this.descuento = this.resultado  * .10;
          this.resultado = this.resultado - this.descuento;
        }
        if (this.boletos >= 5) {
          this.descuento = (this.boletos * this.costo) * .15;
          this.resultado = (this.boletos * this.costo) - this.descuento;
          this.descuento = this.resultado  * .10;
          this.resultado = this.resultado - this.descuento;
        }
        break;
      case "no":
        if (this.boletos > 0 && this.boletos <= 2) {
          this.resultado = (this.boletos * this.costo);
        }
        if (this.boletos >= 3 && this.boletos <= 5) {
          this.descuento = (this.boletos * this.costo) * .10;
          this.resultado = (this.boletos * this.costo) - this.descuento;
        }
        if (this.boletos >= 5) {
          this.descuento = (this.boletos * this.costo) * .15;
          this.resultado = (this.boletos * this.costo) - this.descuento;
        }
        break;
    }
  }
}
