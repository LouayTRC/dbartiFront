import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environement';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl=environment.apiUrl+"/category/"
  constructor(private http:HttpClient) { }

  addCategory(form:Category):Observable<any>{
    return this.http.post<Category>(this.baseUrl+"add/",form)
  }
    
  getAllCategorys():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl+"get/")
  }

  updateCategory(form:Category):Observable<Category>{
    return this.http.put<Category>(`${this.baseUrl}put/${form.id}/`,form)
  }

  deleteCategory(id:Number):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}delete/${id}`)
  }
}
