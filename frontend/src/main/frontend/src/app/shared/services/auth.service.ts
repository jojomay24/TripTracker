import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string;


  private userName:string;
  private userId:string;

  login(userName:string, password:string) {
    return Observable.of(true).delay(1000).do(val => {
      this.isLoggedIn = true;
      this.userName=userName;
      this.userId=userName;   // temporary hack
    });
  }

  public getUserId():string {
    if (this.isLoggedIn) {
      return this.userId;
    }

    return null;
  }

  getUserName():string {
    return this.userName;
  }

  logout() {
    return Observable.of(true).delay(1000).do(val => {
      this.isLoggedIn = false;
      this.userId=null;
      this.userName=null;
    });

  }

}
