import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city : string;
  state : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage : Storage) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  ionViewWillEnter() {
    this.storage.get('location')
    .then((location) => {
      if(location != null) {
        let loc = JSON.parse(location);
        this.city = loc.city;
        this.state = loc.state
      } else {
        this.city = 'Bangalore';
        this.state = 'KA';
      }
    });
  }

  onSubmit() {
    this.storage.set('location', JSON.stringify({city : this.city, state : this.state}));
    setTimeout(() => {
      this.navCtrl.parent.select(0);
    },2000);    
  }

}
