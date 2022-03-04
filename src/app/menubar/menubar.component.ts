// Importaciones.
import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifService } from '../services/gif.service';

// Decorador.
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html'
})

// Clase.
export class MenubarComponent
{
  @ViewChild("checkHistorial") checkHistorial!: ElementRef<HTMLInputElement>; // ViewChild.

  // Variables.
  limite: string = "20";
  verHistorial: boolean = true;
  visibleVentana: boolean = false;
  visibleSidebar: any;

  // Historial
  get historial()
  { 
    return this.gifService.historial; 
  }

  // Constructor.
  constructor( private gifService: GifService ) {}

  // Metodos.
  showDialog() // Abrir la ventana de configuraciones con el boton.
  { 
    this.visibleVentana = true; 
  } 

  closeDialog() // Cerrar la ventana de configuraciones con el boton.
  { 
    this.visibleVentana = false; 
  } 

  // Botones de la Configuracion.
  btnRadioUno() // Boton radio uno.
  { 
    this.limite = "5"; 
  }
  btnRadioDos() // Boton radio dos.
  { 
    this.limite = "10"; 
  }
  btnRadioTres() // Boton radio tres.
  {
    this.limite = "20"; 
  }
  btnRadioCuatro() // Boton radio cuatro.
  {
    this.limite = "30"; 
  }
  btnRadioCinco() // Boton radio cinco.
  { 
    this.limite = "50"; 
  }
  btnRadio() // Boton radio general.
  { 
    this.gifService.valorLimit(this.limite);
  }

  btnCheck() // Boton check.
  {
    this.verHistorial = this.checkHistorial.nativeElement.checked;
  }

  buscarGifs( termino: string ) { this.gifService.buscarGifs( termino ) } // funcion de buscarGifs.

  borrarHistorial()
  { 
    this.gifService.historial = []; 
    localStorage.removeItem("historial");
  }
}
