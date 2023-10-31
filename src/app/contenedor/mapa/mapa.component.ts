import { Component} from '@angular/core';
import { Map, tileLayer, marker, Icon } from 'leaflet';
import { ContenedorService } from '../contenedor.service';
import { Contenedor } from '../contenedor';

@Component({
  selector: 'app-maps',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent {
  contenedores: Contenedor[] = [];
  private map!: Map;


  constructor(
    public contenedorService: ContenedorService
  ) {}

    ionViewDidEnter(){
      this.map = new Map('map').setView([-17.3936114, -66.1568983], 14);
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18
      }).addTo(this.map);

    this.contenedorService.getAll().subscribe(
      (contenedores: Contenedor[]) => {
        this.contenedores = contenedores;
        this.contenedores.forEach((contenedor: Contenedor) => {
          const { latitud, longitud, nombre_contenedor, tipo } = contenedor;
          const icon = new Icon({
            iconUrl: 'assets/icon/trash.png', 
            iconSize: [32, 32], 
            iconAnchor: [16, 32], 
            popupAnchor: [0, -32],
          });
          marker([latitud, longitud],{ icon: icon })
            .addTo(this.map)
            .bindPopup("<strong>Nombre Contenedor:</strong> " + nombre_contenedor + "<br/><strong>Tipo:</strong> " + tipo)
            .openPopup();
        });
      },
      (error) => {
        console.error('Error al obtener los datos del marcador:', error);
      }
    );
  }
  mostrarUbicacionActual() {
    this.map.locate({ setView: true, maxZoom: 14 });

    this.map.on('locationfound', (e) => {
      const icon = new Icon({
        iconUrl: 'assets/icon/people.png', // Ruta a la imagen de la persona
        iconSize: [32, 32], // Tamaño de la imagen
        iconAnchor: [16, 32], // Punto de anclaje del icono
        popupAnchor: [0, -32], // Punto de anclaje del popup
      });
  
      marker(e.latlng, { icon: icon }) // Usar el icono personalizado
        .addTo(this.map)
        .bindPopup('Ubicación actual')
        .openPopup();
    });
  }
}

