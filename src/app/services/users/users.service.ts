import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  // GET ALL USERS
  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // GET USER BY ID
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // CREATE USER
  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, user);
  }

  // UPDATE USER
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, user);
  }

  // DELETE USER
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
