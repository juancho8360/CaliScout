import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MapboxPage } from './mapbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MapboxPage
      }
    ])
  ],
  providers: [Geolocation],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [MapboxPage]
})

export class MapboxPageModule {}
