import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private apiUrl = 'https://dummyjson.com/comments';

  constructor(private http: HttpClient) {}

  // GET ALL
  getComments(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // GET BY ID
  getCommentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // CREATE
  createComment(comment: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, comment);
  }

  // UPDATE
  updateComment(id: number, comment: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, comment);
  }

  // DELETE
  deleteComment(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
