import { Component } from '@angular/core';
import { ResistenciasAngularComponent } from './formularios/resistencias-angular/resistencias-angular.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular02';

  duplicaNumero(numero: number): number {
    return numero * 2;
  }

  Pelicula = {
    titulo: 'Batman',
    ano: new Date(),
    precio: 2500
  }
}
