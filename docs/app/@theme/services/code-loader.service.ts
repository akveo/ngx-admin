import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { publishReplay ,  refCount } from 'rxjs/operators';

@Injectable()
export class NgxCodeLoaderService {

  /**
   * Contains cached files by url.
   * */
  private cache: Map<string, Observable<string>> = new Map();

  constructor(private http: HttpClient) {
  }

  load(path: string): Observable<string> {
    const url = this.buildFilePath(path);
    const cached = this.cache.get(url);

    return cached ? cached : this.buildRequest(url);
  }

  private buildFilePath(path: string): string {
    return `assets/examples/${path}`;
  }

  private buildRequest(url): Observable<string> {
    const request = this.http.get(url, { responseType: 'text' })
      .pipe(
        publishReplay(1),
        refCount(),
      );

    this.cache.set(url, request);

    return request;
  }
}
