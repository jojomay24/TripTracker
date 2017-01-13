import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YourTripsComponent} from './your-trips.component';
import {TripsOverviewComponent} from './trips-overview/trips-overview.component';
import {CreateNewTripComponent} from './create-new-trip/create-new-trip.component';
import {SharedModule} from '../shared/shared.module';
import { ModifyCurrentTripBarComponent } from './modify-current-trip-bar/modify-current-trip-bar.component';
import { TripsDetailViewComponent } from './trips-detail-view/trips-detail-view.component';
import {TripsDetailViewResolveService} from '../shared/services/trips-detail-view-resolve.service';
import { GoogleMapsViewComponent } from './google-maps-view/google-maps-view.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    YourTripsComponent,
    TripsOverviewComponent,
    CreateNewTripComponent,
    ModifyCurrentTripBarComponent,
    TripsDetailViewComponent,
    GoogleMapsViewComponent,
  ],
  exports: [YourTripsComponent],
  providers: [TripsDetailViewResolveService]
})
export class YourTripsModule { }
