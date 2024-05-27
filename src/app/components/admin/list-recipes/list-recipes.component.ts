import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Ingredient } from 'src/app/models/ingredient';
import { Recipe } from 'src/app/models/recipe';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';
import { MatDialog } from '@angular/material/dialog';
import { RecipesAdminComponent } from '../recipes-admin/recipes-admin.component';
import { RecipeService } from 'src/app/services/recipe.service';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css']
})
export class ListRecipesComponent {

  textSearch: string = ""
  recipes!: Recipe[]
  ingredients!:Ingredient[]
  recipesAfficher!: Recipe[]

  constructor(private dialog: MatDialog,private rservice:RecipeService) { }

  ngOnInit(){
    this.rservice.getAllRecipes().subscribe((res)=>{
      this.recipes=res
      this.recipesAfficher=structuredClone(this.recipes)
      
    })
  }

  
  filter(event: any) {
    this.recipesAfficher = this.recipes;

    if (this.textSearch.trim() !== "") {
      this.recipesAfficher = this.recipesAfficher.filter(element => element.title.includes(this.textSearch));
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

   { this.dialog.open(AddRecipeComponent).afterClosed().subscribe((res)=>{
    console.log("ff",res);
    
    this.recipesAfficher.push(res)
    this.recipes.push(res)
   })}

    else{
      this.dialog.open(RecipesAdminComponent,{
        data:r,
        width:'450px'
      });
    }

  }

  deleteRecipe(id:number){
    this.rservice.deleteRecipe(id).subscribe((res)=>{
      this.recipesAfficher=this.recipesAfficher.filter(element=>element.id!=id)
    })
  }


}
