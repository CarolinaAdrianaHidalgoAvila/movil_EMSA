import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrincipalModule } from './principal/principal.module';
import { TutorialModule } from './tutorial/tutorial.module';
import { ContenedorModule } from './contenedor/contenedor.module';
import { RutaModule } from './ruta/ruta.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    PrincipalModule,
    TutorialModule,
    ContenedorModule,
    RutaModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
