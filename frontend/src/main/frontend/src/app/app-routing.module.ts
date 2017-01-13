import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {YourTripsRoutes} from './your-trips/your-trips.routes';
import {HomeRoutes} from './home/home.routes';
import {AboutRoutes} from './about/about.routes';
// import {HomeRoutes} from './home/home.routes';
// import {AboutRoutes} from './about/about.routes';
// import {YourTripsRoutes} from './your-trips/your-trips.routes';

@NgModule({
  imports: [
    RouterModule.forRoot([
      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
      ...HomeRoutes,
      ...AboutRoutes,
      ...YourTripsRoutes,
      {
        path: '**',
        redirectTo: '/',
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

