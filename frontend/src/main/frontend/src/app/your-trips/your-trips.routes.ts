import {Route} from '@angular/router';
import {YourTripsComponent} from './your-trips.component';
import {AuthGuardService} from '../shared/services/auth-guard.service';
import {TripsDetailViewComponent} from './trips-detail-view/trips-detail-view.component';
import {TripsDetailViewResolveService} from '../shared/services/trips-detail-view-resolve.service';

export const YourTripsRoutes:Route[] = [
    {
        path: 'your-trips',
        component: YourTripsComponent,
        canActivate: [AuthGuardService],
        // children: [
        //     {
        //         path: '',
        //         children: [
        //             {
        //                 path: 'trips/:id',
        //                 component: TripsDetailViewComponent,
        //                 resolve: {
        //                     wayPoints: TripsDetailViewResolveService
        //                 }
        //             }
        //         ],
        //     }
        // ]
    },
    {
        path: 'your-trips/trips/:id',
        component: TripsDetailViewComponent,
        canActivate: [AuthGuardService],
        resolve: {
            wayPoints: TripsDetailViewResolveService
        }
    }
];
