import { Injectable } from '@angular/core';
import { environment } from '../../../environement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  baseUrl=environment.apiUrl+"/recipe/"
  constructor(private http:HttpClient) { }

  getAllRecipes():Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.baseUrl+"get/")
  }

  addRecipe(form:Recipe):Observable<Recipe>{
    return this.http.post<Recipe>(this.baseUrl+"add/",form)
  }

  getRecipeById(id:number):Observable<Recipe>{
    return this.http.get<Recipe>(`${this.baseUrl}get/${id}/`)
  }

  deleteRecipe(id:number):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}delete/${id}/`)
  }
}
