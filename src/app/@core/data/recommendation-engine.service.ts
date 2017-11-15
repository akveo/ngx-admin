import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import { Response } from '@angular/http';
import { AppConfig } from '../../app.config';

export class UserPreference {
  first_name: string;
  last_name: string;
  nickname: string;
  user_id: string;
}

@Injectable()
export class RecommendationEngineService {  
  constructor(private http: HttpClient) {

  }

  getUserInfo(userId) {
    const endpoint = AppConfig.RE_API_ENDPOINT+AppConfig.RE_USER_INFO;
    console.log("Calling RE :"+endpoint);
    let parameters = new HttpParams().set('user_id', userId);
    return this.http.get(endpoint, { params : parameters }).subscribe();
  }
}