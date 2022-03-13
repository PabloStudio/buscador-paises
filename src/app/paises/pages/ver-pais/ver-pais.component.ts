// Interfaces.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Country } from '../../interfaces/paises.interface';
import { PaisesService } from '../../services/paises.service';

// Decorador.
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})

// Clase.
export class VerPaisComponent implements OnInit
{
  // Variables.
  pais!: Country

  // Constructor.
  constructor(private paisesService: PaisesService,
              private activatedRoute: ActivatedRoute) { }

  // OnInit.
  ngOnInit(): void 
  {
    this.activatedRoute.params
    .pipe(
      switchMap( ( { id } ) => this.paisesService.getPaisPorCodigo( id ) )
    )
    .subscribe( pais => {
      this.pais = pais;
    });
  }

}
