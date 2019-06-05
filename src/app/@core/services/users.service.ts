/**
 * create by fky
 * create on 6/3/2019
 */
import { Injectable } from '@angular/core';
import {NbAuthJWTToken, NbTokenService} from '@nebular/auth';
import {Observable, of as observableOf} from 'rxjs';
import {User, UserCount} from '../models/user.model';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class UserService {

  private user: User= new User();

  constructor ( private authService: NbTokenService,private httpClient:HttpClient) {
    this.authService.tokenChange().subscribe((token: NbAuthJWTToken) => {
        this.user.name = token.getPayload().username;
        this.user.email = token.getPayload().username;
    });
  }


  public getUser(): Observable<User> {
    return observableOf(this.user);
  }

  public getUserCount():Observable<UserCount>{
    return this.httpClient.get('/api/user/count').pipe(map((count:UserCount)=>{
      return count
    }));
  }


}
