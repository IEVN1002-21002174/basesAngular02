import { Component } from '@angular/core';

@Component({
  selector: 'app-heroeslist',
  standalone: false,
  templateUrl: './heroeslist.component.html',
})
export class HeroeslistComponent {
  heroes:any[] = [
  {
    "imagen":"https://dragonball-api.com/characters/goku_normal.webp",
    nombre:"goku",
    Descripcion:"Kakaroto",
    raza:"Saiyan",
    KI:60.000000
  },
  {
    "imagen":"https://dragonball-api.com/characters/vegeta_normal.webp",
    nombre:"vegeta",
    Descripcion:"vegeta",
    raza:"Saiyan",
    KI:54.000000
  },
  {
    "imagen":"https://dragonball-api.com/characters/picolo_normal.webp",
    nombre:"picolo",
    Descripcion:"Piccolo",
    raza:"Namekian",
    KI:2.000000
  },
  {
    "imagen":"https://dragonball-api.com/characters/bulma.webp",
    nombre:"bulma",
    Descripcion:"bulma",
    raza:"Humana",
    KI:0
  }
  ]
}
