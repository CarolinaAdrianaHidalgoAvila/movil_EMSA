import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
const routes: Routes = [
  { path: 'ruta', redirectTo: 'ruta/mapa', pathMatch: 'full'},
  { path: 'ruta/mapa', component: MapaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RutaRoutingModule { }
