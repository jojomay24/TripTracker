import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {CurrentTripPublisherService} from '../services/current-trip-publisher.service';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.css']
})
export class LoginBarComponent implements OnInit {

  private userName:string='';

  ngOnInit():void {
    console.log('init login-bar');
  }

  constructor(
      private authService:AuthService,
      private router: Router,
      private currentTripPublisherService: CurrentTripPublisherService) {
  }

  get isLoggedIn():boolean {
    return this.authService.isLoggedIn;
  }

  public doLogin():any {
    this.authService.login(this.userName,'').subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.router.navigate(['/your-trips']);
      }
    });
    return false;
  }

  public doLogout():any {
    this.authService.logout().subscribe(() => {
      if (!this.authService.isLoggedIn) {
        this.userName='';
        console.log('LOGGED OUT');
        this.currentTripPublisherService.setCurrentTrip(null);
        this.router.navigate(['/']);
      }
    });
  }

}
