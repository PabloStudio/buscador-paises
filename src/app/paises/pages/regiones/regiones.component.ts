// Importaciones.
import { Component } from '@angular/core';

import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

// Decorador.
@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html'
})

// Clase.
export class RegionesComponent
{
  // Variables.
  paises: Country[] = [];
  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva: string = "";
  
  // Constructor.
  constructor( private paisesService: PaisesService ) 
  {
    // Cargar Storage.
    this.paises = JSON.parse(localStorage.getItem("regiones")!)
  }

  // Metodos.
  guardarStorage() // Guardar el array de Paises.
  {
    localStorage.setItem("regiones", JSON.stringify(this.paises));
  }

  activarRegion( region: string ): void
  {
    this.regionActiva = region;

    // Peticion HTTP.
    this.paisesService.buscarRegion( this.regionActiva )
      .subscribe( valor => {
        this.paises = valor;
        this.guardarStorage();
      });
  }

}
