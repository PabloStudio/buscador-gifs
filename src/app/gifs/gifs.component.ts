// Importaciones.
import { Component } from '@angular/core';

import { GifService } from '../services/gif.service';

// Decorador.
@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html'
})

// Clase.
export class GifsComponent
{
  // Constructor.
  constructor( private gifService: GifService) {}

  // Metodo Get.
  get busquedas() // Busquedas.
  {
    return this.gifService.busquedas;
  }

  get noSeEncontro() // Manejar error si no se encuentra el termino introducido.
  {
    return this.gifService.noSeEncontro;
  }
}
