import {Component, OnInit} from '@angular/core';
import {TripsService} from '../shared/services/trips.service';
import {AuthService} from '../shared/services/auth.service';
import {UserInfoService} from '../shared/services/user-info.service';
import {IUserInfo} from '../entities/user-info';
import {CurrentTripPublisherService} from '../shared/services/current-trip-publisher.service';
import {ITrip} from '../entities/Itrip';
import {Trip} from '../entities/trip';

@Component({
  selector: 'app-your-trips',
  templateUrl: './your-trips.component.html',
  styleUrls: ['./your-trips.component.css']
})
export class YourTripsComponent implements OnInit {

  public userInfo:IUserInfo;
  public trips:ITrip[] = new Array();
  public infoLabel:string;

  constructor(
      private tripsService:TripsService,
      private authService:AuthService,
      private userInfoService:UserInfoService,
      private currentTripPublisherService:CurrentTripPublisherService) {
  }

  ngOnInit():any {
    console.log('onInit: Getting UserInfos ...');
    this.retrieveUserInfo('testUserId');
    console.log('onInit: Getting Trips for ' + this.authService.getUserId());
    this.tripsService.getTripsByUserId(this.authService.getUserId())
        .subscribe(trips => {
          this.trips = trips;
          for (var trip of this.trips) {
            if (trip.tripStatus === Trip.TRIP_STATUS_STARTED) {
              this.currentTripPublisherService.setCurrentTrip(trip);
            }
          }
        });
  }

  retrieveUserInfo(userId:string) {
    this.userInfoService.getUserInfo(userId)
        .subscribe(userInfo => this.userInfo = userInfo);
  }

  onNewTrip(trip:ITrip) {
    this.infoLabel='Trip started...';
    this.currentTripPublisherService.setCurrentTrip(trip);
    this.trips = this.trips.concat(trip);
    this.retrieveUserInfo('testUserId');
  }


  onStopTrip(trip:ITrip) {
    this.currentTripPublisherService.setCurrentTrip(null);
    this.infoLabel='Trip stopped...';
    this.retrieveUserInfo('testUserId');
  }

  get userInfoDiagnostic() {
    return JSON.stringify(this.userInfo);
  }

}
