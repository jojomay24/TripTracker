import { Injectable } from '@angular/core';
import {ITrip} from '../../entities/Itrip';

@Injectable()
export class CurrentTripPublisherService {

  public currentTrip:ITrip;

  constructor() {
  }

  public setCurrentTrip(trip:ITrip) {
    this.currentTrip = trip;
  }

}
