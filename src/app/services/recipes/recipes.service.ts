import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private readonly apiUrl = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) {}

  // GET ALL RECIPES
  getRecipes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // GET RECIPE BY ID
  getRecipeById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // CREATE RECIPE
  createRecipe(recipe: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, recipe);
  }

  // UPDATE RECIPE
  updateRecipe(id: number, recipe: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, recipe);
  }

  // DELETE RECIPE
  deleteRecipe(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
