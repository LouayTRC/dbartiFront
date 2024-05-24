import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Favorites } from 'src/app/models/favorites';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favourites-details',
  templateUrl: './favourites-details.component.html',
  styleUrls: ['./favourites-details.component.css']
})
export class FavouritesDetailsComponent {
  favorites!:Favorites

  constructor(private fService:FavoritesService,private active:ActivatedRoute,private router:Router){}

  ngOnInit(){
    const id=this.active.snapshot.params['id']
    this.fService.getPlaylistById(id).subscribe((res)=>{
      this.favorites=res
      console.log("res fff",res);
      
    })
  }
  checkRecipe(id:number){
    this.router.navigate(['/main/recipes/',id])
  }

  deleteRecipe(id:number){
    this.fService.deleteRecipe(this.favorites.id,id).subscribe((res)=>{
      console.log("delete",res);
      this.favorites.recipes=this.favorites.recipes.filter(element=>element.id!=id)
      
    })
  }
}
