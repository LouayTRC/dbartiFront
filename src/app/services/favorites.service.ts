import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environement';
import { Observable } from 'rxjs';
import { Favorites } from '../models/favorites';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  baseUrl=environment.apiUrl+"/favourites/"
  constructor(private http:HttpClient) { }

  createPlaylist(idU:number,title:String):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}create/${idU}/`,{title,pic:"assets/heart.jpg"})
  }

  getPlaylists(id:number):Observable<Favorites[]>{
    return this.http.get<Favorites[]>(`${this.baseUrl}get/${id}/`)
  }

  addRecipe(idF:String,r:Recipe):Observable<Favorites>{
    return this.http.put<Favorites>(`${this.baseUrl}add/${idF}/${r.id}/`,r)
  }

  getPlaylistById(id:String):Observable<Favorites>{
    return this.http.get<Favorites>(`${this.baseUrl}getById/${id}/`)
  }

  deleteRecipe(idF:number,idR:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}delete/${idF}/${idR}/`);
  }

  deletePlaylist(idF:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}delete/${idF}/`);
  }

}
