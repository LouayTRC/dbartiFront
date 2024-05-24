import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'environement';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl=environment.apiUrl+"/user/"
  user = new BehaviorSubject<any>(null)
  getUser=this.user.asObservable()

  constructor(private http:HttpClient,private router:Router) { }
  
  login(form:any):Observable<any>{
    return this.http.post<any>(this.baseUrl+"login/",form)
  }

  signup(form:User):Observable<any>{
    return this.http.post<any>(this.baseUrl+"signup/",form)
  }

  setUser(aa:any){
    this.user.next(aa)
  }

  logout(){
    this.setUser(undefined)
    this.router.navigate(["/main"])
  }
}
