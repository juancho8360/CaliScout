import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import * as comunas from 'src/json/comunas.json';

@Component({
  selector: 'app-home',
  templateUrl: 'mapbox.page.html',
  styleUrls: ['mapbox.page.scss'],
})

export class MapboxPage implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 3.451122;
  lng = -76.528395;

  constructor(private geolocation: Geolocation) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3RlZmE1NyIsImEiOiJjam5iMnNrMDkwM3BwM3Bwb2t1anprc3A2In0.kf5G3j9TXpRQGOY0HWHM4g';
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.buildMap();
  }

  buildMap() {
    var comuna = comunas.default.iconografia;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 12,
      pitch: 40,
      center: [this.lng, this.lat]
    });

    // console.log(comuna);
    for(var i in comuna){
      var el = document.createElement('div');
      el.style.width = '50px';
      el.style.height = '50px';
      el.style.position = 'absolute';

      var img = '<img src="'+ comuna[i].srcImg +'" />';
  
      el.innerHTML = img;
      
      el.addEventListener('click', function() {
      window.alert("asda");
      });
      
      new mapboxgl.Marker(el)
        .setLngLat(comuna[i].longLat)
        .addTo(this.map);
    }

  }

  locate(){
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }

}
