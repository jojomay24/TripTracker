import {EventEmitter,Component, OnInit, Output, Input} from '@angular/core';
import {IWayPoint, WayPoint} from '../../entities/waypoint';
import {AppComponent} from '../../app.component';
import {UserInfo} from '../../entities/user-info';
import {TripsService} from '../../shared/services/trips.service';
import {CurrentTripPublisherService} from '../../shared/services/current-trip-publisher.service';
import {GeolocationService} from '../../shared/services/geolocation.service';
import {ITrip} from '../../entities/Itrip';

@Component({
  selector: 'app-modify-current-trip-bar',
  templateUrl: './modify-current-trip-bar.component.html',
  styleUrls: ['./modify-current-trip-bar.component.css']
})
export class ModifyCurrentTripBarComponent implements OnInit {

  public lastSavedWayPoint:IWayPoint;


  @Output() onStopTrip = new EventEmitter();
  @Input() public userInfo:UserInfo;
  @Input() public trip:ITrip;

  constructor(private tripService:TripsService,
              public geolocationService:GeolocationService,
              private currentTripPublishService : CurrentTripPublisherService) {
  }

  ngOnInit():void {
  }

  public stopTrip():any {
    console.log(this.trip);
    console.log('Stopping trip ...');
    this.tripService.stopTrip(this.trip)
        .subscribe(
            data => {
              console.log('Stopped Trip: ');
              console.log(data);
              this.currentTripPublishService.setCurrentTrip(null);
              this.onStopTrip.emit(data);   // ITrip
            },
            err => console.log(err)
        );
  }

  public getAndSaveCoordinates() {
    console.log('Saving coordinates ...');

    var wayPoint:IWayPoint = new WayPoint();
    wayPoint.userId = this.userInfo.userId;
    wayPoint.tripId = this.trip.id;
    wayPoint.creationTimeStamp = AppComponent.newDate();
    this.geolocationService.getPosition().subscribe(
        data => {
          console.log('Received coordinations, saving waypoint');
          wayPoint.coordinates = data;
          this.tripService.saveWayPoint(wayPoint).subscribe(
              data => {
                console.log('Saved wayPoint: ' + data);
                console.log(data);
                this.lastSavedWayPoint = wayPoint;
              },
              err => console.log(err)
          );
        },
        err => console.log(err)
    );
  }

}
