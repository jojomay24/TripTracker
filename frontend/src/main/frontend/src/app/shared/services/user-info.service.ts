import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {IUserInfo} from '../../entities/user-info';
import {environment} from '../../../environments/environment';

@Injectable()
export class UserInfoService {

  constructor(private http:Http) {
  }

  public getUserInfo(userId:string):Observable<IUserInfo> {

    return this.http.get(environment.API + '/userinfos/' + userId)
        .map(response => response.json());
    //     .map(json => json._embedded.trips);

  }

}
