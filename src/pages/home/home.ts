import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';

import { WeatherProvider } from "../../providers/weather/weather";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather : any;
  location : {
    city : string,
    state : string
  };

  constructor(public navCtrl: NavController, private weatherProvider : WeatherProvider, private storage : Storage) {

  }

  ionViewWillEnter() {
    this.storage.get('location')
    .then((location) => {
      if(location != null) {
        this.location = JSON.parse(location);
      } else {
        this.location = {
          city : 'Bangalore',
          state : 'KA'
        };
      }
      this.weatherProvider.getWeather(this.location.city, this.location.state)
        .subscribe((res : any) => {
          this.weather = res.current_observation;
      });
    }); 
  }

}
