import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
const routes: Routes = [
  { path: 'tutorial', redirectTo: 'tutorial/lista', pathMatch: 'full'},
  { path: 'tutorial/lista', component: ListaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
