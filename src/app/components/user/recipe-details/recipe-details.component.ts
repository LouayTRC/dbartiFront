import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { SaveRecipePopupComponent } from '../save-recipe-popup/save-recipe-popup.component';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {
  recipe!:Recipe
  user!:any
  constructor(private authService:AuthService,private rService:RecipeService,private active:ActivatedRoute, private dialogRef: MatDialog){}

  ngOnInit(){
    const id=this.active.snapshot.params['id']
    this.authService.user.subscribe((res)=>{
      this.user=res
      this.rService.getRecipeById(id).subscribe((res2)=>{
        this.recipe=res2
      })
    })
    
  }

  openSavePopup(){
    this.dialogRef.open(SaveRecipePopupComponent, {
      width: '400px',
      height: '600px',
      data: { recipe: this.recipe,user:this.user }
    })
  }
  goRecipes(){

  }
}
