import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutaRoutingModule } from './ruta-routing.module';
import { MapaComponent } from './mapa/mapa.component';
import { DetalleComponent } from './detalle/detalle.component';
@NgModule({
  declarations: [
    MapaComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    RutaRoutingModule
  ]
})
export class RutaModule { }
