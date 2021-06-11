import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';

import { HeroesModule } from './heroes/heroes.module';



@NgModule({
  declarations: [
    AppComponent,
     
  ],
  imports: [ // ponemos los modulos de estan dentro de los dir(Heroes)
    BrowserModule,
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
