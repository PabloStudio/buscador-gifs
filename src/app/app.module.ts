// Importaciones.
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimeModule } from './primemodule/prime.module';
import { AppComponent } from './app.component';
import { GifsComponent } from './gifs/gifs.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SearcherComponent } from './searcher/searcher.component';

// Decorador.
@NgModule({
  declarations: // Declaraciones.
  [
    AppComponent,
    GifsComponent,
    MenubarComponent,
    SearcherComponent
  ],
  imports: // Importaciones.
  [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimeModule
  ],
  providers: [], // Providers.
  bootstrap: [AppComponent] // Bootstrap.
})

// Clase.
export class AppModule { }
