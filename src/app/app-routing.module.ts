// Importaciones.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './paises/pages/inicio/inicio.component';
import { PaisesComponent } from './paises/pages/paises/paises.component';
import { RegionesComponent } from './paises/pages/regiones/regiones.component';
import { CapitalesComponent } from './paises/pages/capitales/capitales.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

// Routes.
const routes: Routes = [
  {
    path: "",
    component: InicioComponent,
    pathMatch: "full"
  },
  {
    path: "paises",
    component: PaisesComponent
  },
  {
    path: "regiones",
    component: RegionesComponent
  },
  {
    path: "capitales",
    component: CapitalesComponent
  },
  {
    path: "pais/:id",
    component: VerPaisComponent
  },
  {
    path:"**",
    redirectTo: ""
  }
]


// Decorador.
@NgModule({
  imports: // Importaciones.
  [
    RouterModule.forRoot( routes )
  ],
  exports: // Exportaciones.
  [
    RouterModule
  ]
})

// Clase.
export class AppRoutingModule { }
