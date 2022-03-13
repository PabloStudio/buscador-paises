// Importaciones.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaisesModule } from './paises/paises.module';
import { SharedModule } from './shared/shared.module';
import { PrimengModule } from './primeng/primeng.module';

// Decorador.
@NgModule({
  declarations: // Declaraciones.
  [
    AppComponent
  ],
  imports: // Importaciones.
  [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    PaisesModule,
    AppRoutingModule,
    PrimengModule
  ],
  providers: [], // Providers.
  bootstrap: [AppComponent] // Bootstrap.
})

// Clase.
export class AppModule { }
