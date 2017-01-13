import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {TripsService} from '../../shared/services/trips.service';
import {AuthService} from '../../shared/services/auth.service';
import {CurrentTripPublisherService} from '../../shared/services/current-trip-publisher.service';
import {AppComponent} from '../../app.component';
import {ITrip} from '../../entities/Itrip';
import {Trip} from '../../entities/trip';

@Component({
  selector: 'app-create-new-trip',
  templateUrl: './create-new-trip.component.html',
  styleUrls: ['./create-new-trip.component.css']
})
export class CreateNewTripComponent implements OnInit {

  public showNewTripForm:boolean = false;

  @Output() newTrip = new EventEmitter();
  private trip:ITrip;

  constructor(private tripService:TripsService,
              private authService:AuthService,
              private currentTripPublisherService:CurrentTripPublisherService) {
  }

  ngOnInit():void {
    this.trip = new Trip();
  }

  onNewTrip():void {
    this.showNewTripForm = true;
  }

  onCancelNewTrip():void {
    this.showNewTripForm = false;
    this.trip = new Trip();
  }

  onSubmit() {
    this.trip.tripStatus = 'STARTED';
    this.trip.startedAt = AppComponent.newDate();
    this.trip.userId = this.authService.getUserId();
    this.tripService.saveNewTrip(this.trip)
        .subscribe(
            data => {
              this.showNewTripForm = false;
              this.currentTripPublisherService.setCurrentTrip(this.trip);
              this.trip = new Trip();
              this.newTrip.emit(data);
              console.log('received saved trip from server:');
              console.log(data);
            },
            err => console.log(err),
            () => console.log('Saved new Trip')
        );
  }

  get diagnostic() {
    return JSON.stringify(this.trip);
  }

}
