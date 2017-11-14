import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
  public static ENVIRONMENT = "dev";
  public static RE_API_ENDPOINT = 'https://iamplus-recommendation-'+AppConfig.ENVIRONMENT+'.herokuapp.com';
  public static NLU_API_ENDPOINT = 'http://nlu-'+AppConfig.ENVIRONMENT+'.aneeda.ai:8080';
}