// Importaciones.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CapitalesComponent } from './pages/capitales/capitales.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { RegionesComponent } from './pages/regiones/regiones.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ValorNulo } from '../pipes/valornulo.pipe';




// Decorador.
@NgModule({
  declarations: // Declaraciones.
  [
    CapitalesComponent,
    PaisesComponent,
    RegionesComponent,
    VerPaisComponent,
    InicioComponent,
    ValorNulo
  ],
  imports: // Importaciones.
  [
    CommonModule,
    FormsModule,
    PrimengModule,
    RouterModule
  ],
  exports: // Exportaciones.
  [
    CapitalesComponent,
    PaisesComponent,
    RegionesComponent,
    VerPaisComponent,
    InicioComponent
  ]
})

// Clase.
export class PaisesModule { }
