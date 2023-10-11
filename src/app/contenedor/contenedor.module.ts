import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContenedorRoutingModule } from './contenedor-routing.module';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  declarations: [MapaComponent],
  imports: [
    CommonModule,
    ContenedorRoutingModule
  ]
})
export class ContenedorModule { }
