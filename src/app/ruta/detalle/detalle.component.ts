import { Component, OnInit } from '@angular/core';
import { RutaService } from '../ruta.service';
import { DetalleRuta } from '../detalle-ruta'; 
import { Frecuencia } from '../frecuencia'; 
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  detalle: DetalleRuta = {
    id: 0,
    codigo_vehiculo: '',
    nombre_ruta: '',
    distrito: '',
    hora_inicio: '',
    hora_fin: '',
    peso: 0,
    distancia: 0,
    observacion: '',
    idRuta: 0
  };
  frecuencias: Frecuencia[] = []; 
  constructor(
    private rutaService: RutaService,
    private activatedRoute: ActivatedRoute 
  ) {}

  ngOnInit() {
    const idRuta = Number(this.activatedRoute.snapshot.paramMap.get('idRuta'));
    this.rutaService.getDetalle(idRuta).subscribe((detalle) => {
      this.detalle = detalle;
      this.rutaService.getFrecuencia(this.detalle.id).subscribe((frecuencias) => {
        this.frecuencias = frecuencias.filter((frecuencia) => frecuencia.estado === true);
      });
    });
  }
}
