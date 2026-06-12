import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private readonly apiUrl = 'https://dummyjson.com/todos';

  constructor(private http: HttpClient) {}

  // GET ALL
  getTodos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // GET BY ID
  getTodoById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // CREATE
  createTodo(todo: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, todo);
  }

  // UPDATE
  updateTodo(id: number, todo: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, todo);
  }

  // DELETE
  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
