import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Recipe } from 'src/app/models/recipe';
import { CategoryService } from 'src/app/services/category.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipes!:Recipe[]
  categories!:Category[]
  constructor(private rService:RecipeService,private cservice:CategoryService){}

  ngOnInit(){
    this.rService.getAllRecipes().subscribe((res)=>{
      this.recipes=res
    })
    this.cservice.getAllCategorys().subscribe((res)=>{
      this.categories=res
    })
  }
}
