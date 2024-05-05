import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit  {

  constructor(public dialogRef: MatDialogRef<AddRecipeComponent>,private formBuilder:FormBuilder) {}


  ajoutGroup!:FormGroup 

  lesCats:Category[]=[new Category(1,"Tunisian"),new Category(2,"Asian"),new Category(3,"Italian")]


  ngOnInit(): void {
    


    this.ajoutGroup= this.formBuilder.group(
      
      {
        id: [],
        title: ['',Validators.required],
        description :['',Validators.required],
        ingredients:['',Validators.required],
        duration:['',Validators.required],
        pic:[,Validators.required],
        nbCalories:[,Validators.required] ,
        category:[,Validators.required],
        tuto:[]
 
      }
    )



  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onReset(){
    this.ajoutGroup.reset();
  }

  onAjoute(){

    this.onCloseClick()

  }
}
