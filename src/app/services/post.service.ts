import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environement';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl=environment.apiUrl+"/post/"
  constructor(private http:HttpClient) { }

  addPost(id:number,form:Post):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}add/${id}/`,form)
  }

  getAllPosts():Observable<Post[]>{
    return this.http.get<Post[]>(this.baseUrl+"get/")
  }

  deletePost(id:number):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}delete/${id}/`)
  }

  commentPost(idP:number,idU:number,description:String):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}comment/${idP}/${idU}/`,{description})
  }

  deleteComment(idP:number,idC:number):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}delete/${idP}/${idC}`)
  }
}
