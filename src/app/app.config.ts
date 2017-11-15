import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
  public static ENVIRONMENT = "dev";
  public static RE_API_ENDPOINT = 'http://localhost:8081/';//'https://iamplus-recommendation-'+AppConfig.ENVIRONMENT+'.herokuapp.com/';
  public static NLU_API_ENDPOINT = 'http://nlu-'+AppConfig.ENVIRONMENT+'.aneeda.ai:8080/';

  public static AUTH_LOGIN = 'api/auth/login';
  public static USER_PREFERENCE_PATH = 'user_get_preferences';
  public static MUSIC_ARTIST_PATH = 'api/analytics/music/artists';
}