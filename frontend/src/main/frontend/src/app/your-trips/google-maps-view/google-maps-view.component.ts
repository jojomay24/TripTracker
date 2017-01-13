import {Component, OnInit, Input, NgZone} from '@angular/core';
import {IWayPoint} from '../../entities/waypoint';

@Component({
  selector: 'app-google-maps-view',
  templateUrl: './google-maps-view.component.html',
  styleUrls: ['./google-maps-view.component.css']
})
export class GoogleMapsViewComponent implements OnInit {

  title: string = 'Your trip map ...';
  lng: number = 11.654690299999999;
  lat: number = 48.1862274;

  @Input() public wayPoints:IWayPoint[];

  constructor(private zone: NgZone) {
  }

  ngOnInit():void {
    console.log(this.wayPoints);
  }

}
