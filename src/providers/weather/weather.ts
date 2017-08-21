import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {

  apiKey : string = '795b7102146999dc';
  url : string;

  constructor(public http: Http) {
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  getWeather(city : string, state : string ) {
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
    .map((res : Response) => {
      return res.json();
    });
  }

}
