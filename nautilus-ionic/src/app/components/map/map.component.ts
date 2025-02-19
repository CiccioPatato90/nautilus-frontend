import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import * as L from 'leaflet';
import {latLng, Layer, tileLayer} from "leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit{

  @Input() mapLayers: Layer[] = [];
  map: L.Map | undefined;

  mapOptions = {
    layers: [
      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '© OpenStreetMap contributors'
      })
    ],
    zoom: 10,
    center: latLng(45.116,  7.74),
  };

  ngOnInit(): void {
    this.map = L.map('map', this.mapOptions);
    this.addLayers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.map && changes['mapLayers']) {
      this.map.eachLayer(layer => {
        // Remove all tile layers and markers (except the base tile layer)
        if (!(layer instanceof L.TileLayer)) {
          this.map?.removeLayer(layer);
        }
      });
      this.addLayers();
    }
  }

  private addLayers(): void {
    this.mapLayers.forEach(layer => {
      if(this.map !== undefined){
        layer.addTo(this.map);
      }
    });
    const group = L.featureGroup(this.mapLayers);
    this.map?.fitBounds(group.getBounds(), { padding: [50, 50] });
  }

}
