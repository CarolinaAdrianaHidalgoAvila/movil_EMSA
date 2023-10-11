import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TutorialRoutingModule } from './tutorial-routing.module';
import { ListaComponent } from './lista/lista.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule,
    TutorialRoutingModule
  ]
})
export class TutorialModule { }
