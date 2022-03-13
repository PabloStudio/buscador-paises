import { Component, EventEmitter, Output } from '@angular/core';

import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-capitales',
  templateUrl: './capitales.component.html',
})

export class CapitalesComponent
{
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  
  // Variables.
  termino: string = "";
  paises: Country[] = [];
  hayError: boolean = false;

  // Constructor.
  constructor( private paisesService: PaisesService) 
  {
    // Cargar Storage.
    this.paises = JSON.parse(localStorage.getItem("capitales")!)
  }

  // Metodos.
  valorTermino()
  {
    this.onEnter.emit( this.termino );
  }

  guardarStorage() // Guardar el array de Paises.
  {
    localStorage.setItem("capitales", JSON.stringify(this.paises));
  }

  buscar( termino: string ) // Metodo para buscar los paises.
  {
    this.termino = termino

    // Peticion HTTP.
    this.paisesService.buscarCapital( this.termino )
    .subscribe(
      {
        next:
        (valor) => 
        {
          this.paises = valor;
          this.hayError = false;
          this.guardarStorage();
        },
        error:
        (error) => {
          this.paises = [];
          this.hayError = true;  
          this.guardarStorage();         
        }
      });
  }

}
