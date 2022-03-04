// Importaciones.
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

// Decorador.
@Injectable({
  providedIn: 'root'
})

// Clase.
export class GifService 
{
  // Variables.
  public historial: string[] = [];
  public limite: string = "20";
  public busquedas: Gif[] = []; 
  public seEncontro: boolean = true;
  private apiKeyGifs: string = "LhPTZHTwUc3B9IMhBWA00VQdaf2wdIsC"; 
  
  // Constructor.
  constructor( private http: HttpClient ) 
  {
    // Cargar elementos del Local Storage.
    this.historial = JSON.parse(localStorage.getItem("historial")!) || [];
    this.busquedas = JSON.parse(localStorage.getItem("busquedas")!) || [];
  }

  // Metodos Get.
  public get Historial(): string[] // Historial.
  {
    return this.historial;
  }

  public get noSeEncontro(): boolean // Valor si se encontro o no el termino introducido.
  {
    return this.seEncontro;
  }

  // Metodos.
  valorLimit( limite: string ) // Valor del Limit de los Params
  {
    return this.limite = limite;
  }

  buscarGifs( termino: string )
  {
    termino = termino.trim().toLocaleLowerCase(); // Transformamos el termino recibido en minisculas y sin espacios.

    // Historial.
    if (this.historial.length > 9) { this.historial.pop(); }
    if ( !this.historial.includes(termino) ) this.historial.push(termino);

    localStorage.setItem("historial", JSON.stringify(this.historial));

    // Params del HTTP Gifs.
    const params = new HttpParams()
    .set("api_key", this.apiKeyGifs) // Key de la api.
    .set("limit", this.limite) // Limite de gifs que aparecen por busqueda.
    .set ("q", termino); // Termino introducido en el buscador.
    
    // Peticion HTTP (get).
    return this.http.get<SearchGifsResponse>( "https://api.giphy.com/v1/gifs/search", { params } )
      .subscribe( (gifs) => {
        this.busquedas = gifs.data; 

        // ¿Se encontro el termino introducido?
        if (gifs.data.length == 0) this.seEncontro = false;
        else if (gifs.data.length != 0) this.seEncontro = true;

        // Local Storage.
        localStorage.setItem("busquedas", JSON.stringify(this.busquedas));
      });
  }
}
