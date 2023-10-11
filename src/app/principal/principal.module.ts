import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal/principal.component';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    IonicModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
