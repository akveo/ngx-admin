import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly apiUrl = 'https://dummyjson.com/posts';

  constructor(private http: HttpClient) {}

  // GET ALL POSTS
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // GET POST BY ID
  getPostById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // CREATE POST
  createPost(post: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, post);
  }

  // UPDATE POST
  updatePost(id: number, post: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, post);
  }

  // DELETE POST
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
