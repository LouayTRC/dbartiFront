import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'environement';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl=environment.apiUrl+"/auth/"
  constructor(private http:HttpClient) { }

  login(form:any):Observable<Token>{
    return this.http.post<Token>(this.baseUrl+"login/",form)
  }

  signup(form:User):Observable<any>{
    return this.http.post<any>(this.baseUrl+"signup/",form)
  }
}
