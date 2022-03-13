// Importaciones.
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/paises.interface';

// Decorador.
@Injectable({
  providedIn: 'root'
})

// Clase.
export class PaisesService 
{
  // Constructor.
  constructor( private http: HttpClient ) { }

  // Metodo Get.
  getPaisPorCodigo( id: string ): Observable<Country>
  {
    // Funcionamiento.
    return this.http.get<Country>(`https://restcountries.com/v2/alpha/${ id }`);
  }

  // Metodos.

  buscarPais( termino: string ): Observable<Country[]> // Buscar por Pais.
  {
    return this.http.get<Country[]>(`https://restcountries.com/v2/name/${ termino }`);
  }

  buscarCapital( termino: string ): Observable<Country[]> // Buscar por Capital.
  {
    return this.http.get<Country[]>(`https://restcountries.com/v2/capital/${ termino }`);
  }

  buscarRegion( region: string ): Observable<Country[]> // Buscar por Region.
  {
    return this.http.get<Country[]>(`https://restcountries.com/v2/region/${ region }`);
  }
}
