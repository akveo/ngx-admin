/**
 * create by fky
 * create on 6/3/2019
 */
import { Injectable } from '@angular/core';
import {NbAuthJWTToken, NbAuthService, NbTokenService} from "@nebular/auth";
import {Observable, of as observableOf} from "rxjs";
import {User} from "../models/user.model";

@Injectable()
export class UserService{

  private user:User=new  User();

  constructor(private authService:NbTokenService){
    this.authService.tokenChange().subscribe((token:NbAuthJWTToken) =>{
        this.user.name = token.getPayload().username;
        this.user.email = token.getPayload().username;
    });
  }


  public getUser():Observable<User>{
    return observableOf(this.user);
  }


}
