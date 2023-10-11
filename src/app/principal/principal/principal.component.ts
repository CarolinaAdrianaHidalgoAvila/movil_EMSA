import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
})
export class PrincipalComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  irATutorial() {
    this.router.navigate(['/tutorial/lista']); // Reemplaza '/tutorial' con la ruta real de tu página de tutorial
  }

  irAContenedor() {
    this.router.navigate(['/contenedor/mapa']); // Reemplaza '/contenedor' con la ruta real de tu página de contenedor
  }

  irARuta() {
    this.router.navigate(['/ruta/mapa']); // Reemplaza '/ruta' con la ruta real de tu página de ruta
  }

}
