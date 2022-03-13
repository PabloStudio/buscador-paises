// Importaciones.
import { NgModule } from '@angular/core';

// Importaciones de PrimeNG.
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';


// Decorador.
@NgModule({
  declarations: [],
  exports:
  [
    ButtonModule,
    InputTextModule,
    TableModule,
    SidebarModule
  ]
})

// Clase.
export class PrimengModule { }
