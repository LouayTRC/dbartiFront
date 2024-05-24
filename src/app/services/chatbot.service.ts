import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  baseUrl=environment.apiUrl+"/chatbot/"
  constructor(private http:HttpClient) { }

  sendMessage(message:String):Observable<any>{
    return this.http.post<any>(this.baseUrl,{message})
  }
}
