import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit  {

  constructor(public dialogRef: MatDialogRef<AddRecipeComponent>,private formBuilder:FormBuilder,private categoryService:CategoryService,private rservice:RecipeService) {}


  ajoutGroup!:FormGroup 

  categories!:Category[]

  ngOnInit(): void {
    


    this.ajoutGroup= this.formBuilder.group(
      
      {
        title: ['',Validators.required],
        description :['',Validators.required],
        ingredients:[''],
        duration:['',Validators.required],
        pic:[,Validators.required],
        nbCalories:[,Validators.required] ,
        category:[,Validators.required],
        tuto:[]
 
      }
    )

    this.getCategories()

  }

  getCategories(){
    this.categoryService.getAllCategorys().subscribe(res=>{
      this.categories=res
    })
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onReset(){
    this.ajoutGroup.reset();
  }

  onAjoute(){
    this.rservice.addRecipe(this.ajoutGroup.value).subscribe((res)=>{
      console.log("res",res);
      this.dialogRef.close(res);
    })
    

  }
}
