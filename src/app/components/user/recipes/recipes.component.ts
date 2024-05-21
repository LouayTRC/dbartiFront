import { Component } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Ingredient } from 'src/app/models/ingredient';
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




  recipes2: Recipe[] = [new Recipe(1, "salad", "mmmmm", [new Ingredient(1,"hrissa"),new Ingredient(1,"egg")], 2, "assets/x.jpg", 4, new Category(9, "lll")),
  new Recipe(2, "pancake", "mmmmm", [], 2, "assets/pan.jpg", 4, new Category(9, "lll")),
  new Recipe(3, "spaghetti", "mmmmm", [], 2, "assets/mak.jpeg", 4, new Category(9, "lll")),
  new Recipe(1, "salad", "mmmmm", [new Ingredient(1,"hrissa"),new Ingredient(1,"egg")], 2, "assets/x.jpg", 4, new Category(9, "lll")),
  new Recipe(2, "pancake", "mmmmm", [], 2, "assets/pan.jpg", 4, new Category(9, "lll")),
  new Recipe(3, "spaghetti", "mmmmm", [], 2, "assets/mak.jpeg", 4, new Category(9, "lll")),
  
  ]
}
