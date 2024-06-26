import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  textSearch: string = ""
  selectedcategory!: any
  affRecipes!:Recipe[]
  constructor(private rService:RecipeService,private cservice:CategoryService,private router:Router){}

  ngOnInit(){
    this.rService.getAllRecipes().subscribe((res)=>{
      this.recipes=res
      this.affRecipes=structuredClone(this.recipes)
    })
    this.cservice.getAllCategorys().subscribe((res)=>{
      this.categories=res
    })
  }

  checkRecipe(id:number){
    this.router.navigate(["/main/recipes",id])
  }

  filter(event: any) {
    this.affRecipes = this.recipes;

    if (this.selectedcategory) {
      this.affRecipes = this.affRecipes.filter(element => element.category.id == this.selectedcategory.id);
    }

    if (this.textSearch.trim() !== "") {
      this.affRecipes = this.affRecipes.filter(element => element.title.includes(this.textSearch));
    }
  }

  filter2(c: Category) {
    this.affRecipes = this.recipes;

    if (this.selectedcategory == c) {
      this.selectedcategory = undefined
      if (this.textSearch.trim() !== "") {
        this.affRecipes = this.affRecipes.filter(element => element.title.includes(this.textSearch));
      }

    }
    else {
      this.affRecipes = this.affRecipes.filter(element => element.category.id == c.id);
      if (this.textSearch.trim() !== "") {
        this.affRecipes = this.affRecipes.filter(element => element.title.includes(this.textSearch));
      }
      this.selectedcategory = c;
    }


  }
}
