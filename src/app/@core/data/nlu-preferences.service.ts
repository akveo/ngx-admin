import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
export class NluPreferencesService {  
  constructor(private http: HttpClient) {

  }

  getUserPreferences(userId) {
    console.log("Calling Nlu :"+AppConfig.NLU_API_ENDPOINT+'/user_get_preferences');

    return this.http.post(AppConfig.RE_API_ENDPOINT+'/user_get_preferences', {
      user_id: userId
    }).subscribe();
  }
}
