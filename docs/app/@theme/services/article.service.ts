import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NgxArticleService {

  constructor(private http: HttpClient) { }

  getArticle(source: string): Observable<string> {
    return this.http.get(`articles/${source}`, { responseType: 'text' });
  }
}
