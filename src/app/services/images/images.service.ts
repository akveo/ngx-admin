import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private readonly apiUrl = 'https://dummyjson.com/image';

  constructor(private http: HttpClient) {}

  getImage(
    size: string,
    background: string,
    color?: string,
    text?: string,
    fontFamily?: string
  ): Observable<Blob> {

    let url = `${this.apiUrl}/${size}/${background}`;

    if (color) {
      url += `/${color}`;
    }

    const params: string[] = [];

    if (fontFamily) {
      params.push(`fontFamily=${fontFamily}`);
    }

    if (text) {
      params.push(`text=${encodeURIComponent(text)}`);
    }

    if (params.length) {
      url += `?${params.join('&')}`;
    }

    return this.http.get(url, {
      responseType: 'blob',
    });
  }

  generateImageUrl(
    size: string,
    background: string,
    color?: string,
    text?: string,
    fontFamily?: string
  ): string {

    let url = `${this.apiUrl}/${size}/${background}`;

    if (color) {
      url += `/${color}`;
    }

    const params: string[] = [];

    if (fontFamily) {
      params.push(`fontFamily=${fontFamily}`);
    }

    if (text) {
      params.push(`text=${encodeURIComponent(text)}`);
    }

    if (params.length) {
      url += `?${params.join('&')}`;
    }

    return url;
  }
}
