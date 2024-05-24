import { Component } from '@angular/core';
import { RecipesAdminComponent } from '../../admin/recipes-admin/recipes-admin.component';
import { MatDialog } from '@angular/material/dialog';
import { AdddetailuserComponent } from '../adddetailuser/adddetailuser.component';
import { AuthService } from 'src/app/services/auth.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Favorites } from 'src/app/models/favorites';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  user!:any
  favourites!:Favorites[]
  constructor(private authService:AuthService,private fService:FavoritesService,private router:Router) { }

  ngOnInit(){
    this.authService.user.subscribe((res)=>{
      this.user=res
      this.fService.getPlaylists(this.user.id).subscribe((res)=>{
        this.favourites=res
      })
    })
  }

  createPlaylist(name:String){
    this.fService.createPlaylist(this.user.id,name).subscribe((res)=>{
      console.log("res",res);
      this.favourites.push(res.favourites)
    })
  }

  deletePlaylist(idF:number){
    this.fService.deletePlaylist(idF).subscribe((res)=>{
      console.log(res);
      this.favourites=this.favourites.filter((element=>element.id!=idF))
    })
  }

  goFavorite(id:number){
    this.router.navigate(['/main/favorites/',id])
  }
}
