import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {IWayPoint} from '../../entities/waypoint';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import {ITrip} from '../../entities/Itrip';
import {Trip} from '../../entities/trip';

@Injectable()
export class TripsService {

  constructor(private http:Http) {
  }

  public getTrips():Observable<ITrip[]> {
    return this.http.get(environment.API + '/trips')
        .map(response => response.json())
        .map(json => json['._embedded'].trips);  // wirklich mit Punkt? '.embedded

  }

  public getTripsByUserId(userId:string):Observable<ITrip[]> {
    var headers = new Headers();
    var searchParams = { 'userId' : userId };
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.API + '/search/findTrips', JSON.stringify(searchParams), {headers: headers})
        .map(res => res.json());
  }

  public getTrip(id:string):Observable<ITrip> {
    return this.http.get(environment.API + '/trips/' + id)
        .map(response => response.json());

  }

  public saveNewTrip(trip:ITrip):Observable<ITrip> {
    console.log('saving');
    console.log(JSON.stringify(trip));
    console.log(trip);
    console.log('done saving');
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.API + '/trips', JSON.stringify(trip), {headers: headers})
        .map(res => res.json());
  }

  public stopTrip(trip:ITrip):Observable<ITrip> {
    console.log('stopping');
    console.log(JSON.stringify(trip));
    console.log(trip);
    console.log('done stopping');
    var headers = new Headers();
    trip.tripStatus = Trip.TRIP_STATUS_STOPPED;
    headers.append('Content-Type', 'application/json');
    return this.http.put(environment.API + '/trips/' + trip.id, JSON.stringify(trip), {headers: headers})
        .map(res => res.json());
  }

  public saveWayPoint(wayPoint:IWayPoint):Observable<IWayPoint> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.API + '/waypoints', JSON.stringify(wayPoint), {headers: headers})
        .map(res => res.json());
  }

  public getWayPointsByTripId(tripId:string):Observable<IWayPoint[]> {
    return this.http.get(environment.API + '/waypoints/search/findByTripId?tripId=' + tripId)
        .map(response => response.json())
        .map(json => json['_embedded'])
        .map(json => json['waypoints']);
  }

}
