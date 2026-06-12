import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  private readonly apiUrl = 'https://dummyjson.com/quotes';

  constructor(private http: HttpClient) {}

  // GET ALL QUOTES
  getQuotes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // GET QUOTE BY ID
  getQuoteById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // CREATE QUOTE
  createQuote(quote: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, quote);
  }

  // UPDATE QUOTE
  updateQuote(id: number, quote: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, quote);
  }

  // DELETE QUOTE
  deleteQuote(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
