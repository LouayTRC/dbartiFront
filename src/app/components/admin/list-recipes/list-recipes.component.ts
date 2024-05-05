import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { MatDialog } from '@angular/material/dialog';
import { RecipesAdminComponent } from '../recipes-admin/recipes-admin.component';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent {


  recipes: Recipe[] = [new Recipe(1, "pp", "mmmmm", new Ingredient(1, "ll"), 2, "url", 4, new Category(9, "lll")),
  new Recipe(2, "kk", "mmmmm", new Ingredient(1, "ll"), 2, "url", 4, new Category(9, "lll")),
  new Recipe(3, "yy", "mmmmm", new Ingredient(1, "ll"), 2, "url", 4, new Category(9, "lll"))
  ]

  recipesAfficher: Recipe[]=this.recipes;

  constructor(private dialog: MatDialog) { }


  
  filtrer(s:string) {

    this.recipesAfficher = this.recipes

    if (s) {
       this.recipesAfficher = this.recipesAfficher.filter(e => e.title.toUpperCase().indexOf(s.toUpperCase()) == 0 )
      }


    
  }



  trier(i: number) {
    if (i == 1) {
      this.recipes.sort((a, b) => (a.id > b.id ? 1 : -1))
    }

    if (i == 2) {
      this.recipes.sort((a, b) => (a.title > b.title ? 1 : -1))
    }

    if (i == 3) {
      this.recipes.sort((a, b) => (a.duration > b.duration ? 1 : -1))
    }

    if (i == 4) {
      this.recipes.sort((a, b) => (a.nbCalories > b.nbCalories ? 1 : -1))
    }
  }








  openDialog(x:number,r:any) {

    if(x==1)

   { this.dialog.open(AddRecipeComponent);}

    else{
      this.dialog.open(RecipesAdminComponent,{
        data:r,
        width:'450px'
      });
    }

  }


}
