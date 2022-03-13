// Importaciones.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenubarComponent } from './menubar/menubar.component';
import { PrimengModule } from '../primeng/primeng.module';



// Decorador.
@NgModule({
  declarations: // Declaraciones.
  [
    MenubarComponent
  ],
  imports: // Importaciones.
  [
    CommonModule,
    RouterModule,
    PrimengModule
  ],
  exports: // Exportaciones.
  [
    MenubarComponent 
  ]
})

// Clase.
export class SharedModule { }
