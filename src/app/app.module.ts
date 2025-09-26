import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeslistComponent } from './heroes/heroeslist/heroeslist.component';
import { FormsModule } from '@angular/forms';
import { HeroesFilterPipe } from './heroes/heroes-filter.pipe';
import { OperaBasComponent } from './formularios/opera-bas/opera-bas.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
import { ResistenciasAngularComponent } from './formularios/resistencias-angular/resistencias-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroeslistComponent,
    HeroesFilterPipe,
    OperaBasComponent,
    CinepolisComponent,
    ResistenciasAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
