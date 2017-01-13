import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs/Rx';
import {Coordinates} from '../../entities/waypoint';

@Injectable()
export class GeolocationService {

  public getPosition():Observable<Coordinates> {
    if (navigator.geolocation) {
      return Observable.create(
          function (observer:Observer<any>) {
            let callback = function (position:any) {
              let coords = new Coordinates(
                  position.coords.longitude,
                  position.coords.latitude);
              return observer.next(coords);
            };
            let errorCallback = function (error:any) {
              alert('Fehler: ' + error + '\n' + error.code + '\n' + error.message);
              console.log(error);
            };
            navigator.geolocation.getCurrentPosition(callback, errorCallback,
                {
                  enableHighAccuracy: true,
                  timeout: 5000,
                  maximumAge: 60000
                });
          });
    }
    return Observable.of(new Coordinates(0, 0));
  }

}
