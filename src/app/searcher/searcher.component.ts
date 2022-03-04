// Importaciones.
import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifService } from '../services/gif.service';

// Decorador.
@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html'
})

export class SearcherComponent
{
  @ViewChild("txtBuscar") txtBuscar!: ElementRef<HTMLInputElement>; // Conseguir el elemento del HTML de "txtBuscar".

  // Constructor.
  constructor( private gifService : GifService )  {}

  // Metodos.
  buscar( termino: string )
  {
    this.gifService.buscarGifs( termino ) // pasar el Termino al servidor, asi hace la peticion HTTP.
  }
}
