import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environement';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  baseUrl=environment.apiUrl+"/ingredient/"
  constructor(private http:HttpClient) { }

  getAllIngredients():Observable<Ingredient[]>{
    return this.http.get<Ingredient[]>(this.baseUrl+'get/')
  }

  addIng(name:String):Observable<Ingredient>{
    return this.http.post<Ingredient>(this.baseUrl+'add/',{name})
  }

  deleteIng(id:number):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}delete/${id}`)
  }
}
