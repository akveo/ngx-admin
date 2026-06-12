import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  private readonly apiUrl = 'https://dummyjson.com/carts';

  constructor(private http: HttpClient) {}

  // GET ALL CARTS
  getCarts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // GET CART BY ID
  getCartById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // CREATE CART
  createCart(cart: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, cart);
  }

  // UPDATE CART
  updateCart(id: number, cart: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, cart);
  }

  // DELETE CART
  deleteCart(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
