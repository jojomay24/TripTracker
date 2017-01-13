import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from './navbar/index';
import {TripsService} from './services/trips.service';
import {AuthService} from './services/auth.service';
import {UserInfoService} from './services/user-info.service';
import {CurrentTripPublisherService} from './services/current-trip-publisher.service';
import {LoginBarComponent} from './login-bar/login-bar.component';
import {AuthGuardService} from './services/auth-guard.service';
import {GeolocationService} from './services/geolocation.service';
import {AgmCoreModule} from 'angular2-google-maps/core/core-module';
import { ToolbarComponent } from './toolbar/toolbar.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      AgmCoreModule.forRoot({
          apiKey: 'fake'
      }),
  ],
  declarations: [NavbarComponent, LoginBarComponent, ToolbarComponent],
  exports: [
      NavbarComponent,
      CommonModule,
      FormsModule,
      RouterModule,
      LoginBarComponent,
      AgmCoreModule,
      ToolbarComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [TripsService, AuthService, UserInfoService, CurrentTripPublisherService, AuthGuardService, GeolocationService]
    };
  }
}
