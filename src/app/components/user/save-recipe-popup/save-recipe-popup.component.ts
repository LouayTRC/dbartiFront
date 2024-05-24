import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Favorites } from 'src/app/models/favorites';
import { Recipe } from 'src/app/models/recipe';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-save-recipe-popup',
  templateUrl: './save-recipe-popup.component.html',
  styleUrls: ['./save-recipe-popup.component.css']
})
export class SaveRecipePopupComponent {
  playlists!:Favorites[]

  constructor(private fservice:FavoritesService,@Inject(MAT_DIALOG_DATA) public data: any,private matDialog:MatDialog){}

  ngOnInit(){
    console.log("data",this.data);

    this.fservice.getPlaylists(this.data.user.id).subscribe((res)=>{
      this.playlists=res
      console.log("playlists",this.playlists);
      
    })
  }
  addRecipe(idF:String,r:Recipe){
    this.fservice.addRecipe(idF,r).subscribe((res)=>{
      console.log("reeees",res);
      this.matDialog.closeAll()
      
    })
  }
  closePopup(){
    this.matDialog.closeAll()
  }
}
