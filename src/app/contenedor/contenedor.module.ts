import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ContenedorRoutingModule } from './contenedor-routing.module';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  declarations: [MapaComponent],
  imports: [
    CommonModule,
    IonicModule,
    ContenedorRoutingModule
  ]
})
export class ContenedorModule { }
