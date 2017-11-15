import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { AppConfig } from '../../app.config';

@Injectable()
export class RecommendationEngineService {  
  constructor(private http: HttpClient) {

  }

  getUserInfo(userId) {
    const endpoint = AppConfig.RE_API_ENDPOINT+AppConfig.RE_USER_INFO;
    console.log("getUserInfo => "+endpoint);
    return this.http.get(endpoint, {
      params : new HttpParams().set('user_id', userId)
    });
  }

  getPlaylists(userId) {
    const endpoint = AppConfig.RE_API_ENDPOINT+AppConfig.RE_USER_PLAYLIST;
    console.log("getPlaylists => "+endpoint);
    return this.http.get(endpoint, {
      params : new HttpParams().set('user_id', userId)
    });
  }
}