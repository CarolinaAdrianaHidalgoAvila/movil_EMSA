import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './mapa/mapa.component';
const routes: Routes = [
  { path: 'contenedor', redirectTo: 'contenedor/mapa', pathMatch: 'full'},
  { path: 'contenedor/mapa', component: MapaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContenedorRoutingModule { }
