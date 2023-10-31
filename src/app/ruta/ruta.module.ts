import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RutaRoutingModule } from './ruta-routing.module';
import { MapaComponent } from './mapa/mapa.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    MapaComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    RutaRoutingModule,
    FormsModule,
    IonicModule
  ]
})
export class RutaModule { }
