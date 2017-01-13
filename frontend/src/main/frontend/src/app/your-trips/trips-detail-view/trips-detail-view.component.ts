import { Component, OnInit } from '@angular/core';
import {IWayPoint} from '../../entities/waypoint';
import {ActivatedRoute, Router} from '@angular/router';
import {TripsService} from '../../shared/services/trips.service';
import {ITrip} from '../../entities/Itrip';
import {Trip} from '../../entities/trip';

@Component({
  selector: 'app-trips-detail-view',
  templateUrl: './trips-detail-view.component.html',
  styleUrls: ['./trips-detail-view.component.css']
})
export class TripsDetailViewComponent implements OnInit {

  public trip:ITrip;
  public wayPoints:IWayPoint[];

  private sub:any;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private tripService:TripsService) {
  }

  ngOnInit() {
    this.route.data.subscribe(
        (data: { wayPoints: IWayPoint[] }) => {
          this.wayPoints = data.wayPoints;
          this.trip = new Trip();
          console.log("sssss", this.wayPoints);
        }
    );
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.tripService.getTrip(id).subscribe(trip => {
        this.trip = trip;
      });
    });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  gotoTripsOverview() {
    this.router.navigate(['your-trips']);
  }

}
