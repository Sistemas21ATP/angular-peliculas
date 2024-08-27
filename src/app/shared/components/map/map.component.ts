import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { icon, latLng, LeafletMouseEvent, marker, Marker, MarkerOptions, tileLayer } from 'leaflet';
import { Coordenada } from './Coordenada';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
  ngOnInit(): void {
    this.layers = this.startingCords?.map(value =>{
      const marker_1 = marker([value.latitud, value.longitud], this.markerOptions)

      return marker_1;
    });
  }

  @Input()
  startingCords:Coordenada[] = []; 

  centerCords:Coordenada = {latitud:28.667710961126758, longitud:-106.09283321308602};

  @Output()
  selectCord = new EventEmitter<Coordenada>();

  markerOptions:MarkerOptions ={
    icon:icon({
      iconSize:[25,41],
      iconAnchor:[13,41],
      iconUrl:'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: latLng(this.centerCords.latitud, this.centerCords.longitud)
  };

  layers: Marker<any>[] = [];

  handleClick(event:LeafletMouseEvent){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;

    this.layers = [];
    this.layers.push(marker([latitud, longitud], this.markerOptions));

    this.selectCord.emit({latitud, longitud});
  }
}
