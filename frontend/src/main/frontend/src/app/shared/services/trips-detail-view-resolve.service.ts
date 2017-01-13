import { Injectable } from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {IWayPoint} from '../../entities/waypoint';
import {TripsService} from './trips.service';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TripsDetailViewResolveService implements Resolve<IWayPoint[]> {
  constructor(private tripService:TripsService, private router:Router) {
  }

  // resolve(route:ActivatedRouteSnapshot):Observable<IWayPoint[]>|boolean {
  //   let id = route.params['id'];
  //   let wps = this.tripService.getWayPointsByTripId(id);
  //
  //   return wps;
  // }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IWayPoint[]> {
    let id = route.params['id'];
    let wps = this.tripService.getWayPointsByTripId(id);
    return wps;
    };



}
