import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ITrip} from '../../entities/Itrip';

@Component({
  selector: 'app-trips-overview',
  templateUrl: './trips-overview.component.html',
  styleUrls: ['./trips-overview.component.css']
})
export class TripsOverviewComponent implements OnInit {

  public title = 'Trips Overview';

  @Input() public trips:ITrip[];

  constructor(private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
  }
  onSelect(trip:ITrip) {
    console.log(trip);
    this.router.navigate(['/your-trips/trips', trip.id]);
  }

}
