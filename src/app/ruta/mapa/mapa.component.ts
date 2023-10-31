import { Component} from '@angular/core';
import { Map, tileLayer, marker, Polyline, LatLng,Icon } from 'leaflet';
import { RutaService } from '../ruta.service';
import { Ruta } from '../ruta';
import { DetalleRuta } from '../detalle-ruta';
import { Frecuencia } from '../frecuencia';
import { PuntoLinea } from '../punto-linea';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent {
  private map!: Map;
  zonaSeleccionada: string = '';
  rutaPolyline!: Polyline;
  idRuta: number = 0;
  
  constructor(
    public rutaService: RutaService,
    private router: Router
  ) {}
  ionViewDidEnter() {
    this.inicializarMapa();
  }

  // Función para inicializar el mapa
  inicializarMapa() {
    this.map = new Map('map').setView([-17.3936114, -66.1568983], 14);

    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18,
    }).addTo(this.map);
  }
  cargarRutas() {
    if (this.zonaSeleccionada) {
      this.rutaService.obtenerDetallesPorZona(this.zonaSeleccionada).subscribe(
        (data: any) => {
          const detalles: DetalleRuta[] = data.detalles;
          console.log(detalles);
          // Itera a través de los detalles de rutas y traza cada una de ellas
          detalles.forEach((detalle: DetalleRuta) => {
            const color = this.getRandomColor();
            this.trazarRutaEnMapa(detalle, color);
          });
        },
        (error) => {
          console.error('Error al obtener detalles de la zona', error);
        }
      );
    }
  }
  
  
  
  trazarRutaEnMapa(detalle: DetalleRuta,color: string) {
    this.rutaService.getPuntosRuta(detalle.idRuta).subscribe((puntos: PuntoLinea[]) => {
      const coordinates: LatLng[] = puntos.map((punto: PuntoLinea) => {
        return new LatLng(punto.latitud, punto.longitud);
      });
  
      const rutaPolyline = new Polyline(coordinates, {
        color: color,
        weight: 5,
        opacity: 0.7,
      }).addTo(this.map);

      this.map.fitBounds(rutaPolyline.getBounds());
      
      rutaPolyline.on('click', () => {
        this.redirigirAVistaDetalleRuta(detalle.idRuta);
      });
    });
  }
  
  redirigirAVistaDetalleRuta(idRuta: number) {
    this.router.navigate(['/ruta/detalle', idRuta]);
  }

mostrarUbicacionActual() {
  this.map.locate({ setView: true, maxZoom: 14 });
  this.map.on('locationfound', (e) => {
    const icon = new Icon({
      iconUrl: 'assets/icon/people.png', 
      iconSize: [32, 32], 
      iconAnchor: [16, 32], 
      popupAnchor: [0, -32], 
    });

    marker(e.latlng, { icon: icon }) 
      .addTo(this.map)
      .bindPopup('Ubicación actual')
      .openPopup();
  });
}
getRandomColor() {
  // Genera valores aleatorios para los componentes rojo, verde y azul
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convierte los valores en formato hexadecimal y únelos
  const color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;

  return color;
}

}
