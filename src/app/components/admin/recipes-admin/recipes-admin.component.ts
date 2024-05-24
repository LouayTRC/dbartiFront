import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-recipes-admin',
  templateUrl: './recipes-admin.component.html',
  styleUrls: ['./recipes-admin.component.css']
})
export class RecipesAdminComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RecipesAdminComponent>, @Inject(MAT_DIALOG_DATA) public rec: Recipe, private fb: FormBuilder) { }

  Modif!: FormGroup

  t1 = false;
  t2 = false;
  t3 = false;
  t4 = false;
  t5 = false;
  t6 = false;
  t7 = false;


  ngOnInit(): void {

    this.Modif= this.fb.group(
      
      {
        id: [this.rec.id],
        title: [this.rec.title,Validators.required],
        description :[this.rec.description,Validators.required],
        ingredients:[this.rec.ingredients,Validators.required],
        duration:[this.rec.duration,Validators.required],
        pic:[this.rec.pic,Validators.required],
        nbCalories:[this.rec.nbCalories,Validators.required] ,
        category:[this.rec.category,Validators.required],
        tuto:[]
 
      }
    )
  }

  show(x: number) {

    switch (x) {
      case 1:
        this.t1 = !this.t1;
        break;
      case 2:
        this.t2 = !this.t2;
        break;
      case 3:
        this.t3 = !this.t3;
        break;
      case 4:
        this.t4 = !this.t4;
        break;
      case 5:
        this.t5 = !this.t5;
        break;
      case 6:
        this.t6 = !this.t6;
        break;
      case 7:
        this.t7 = !this.t7;

    }
  }


  confirmer(x:number){
    this.rec=this.Modif.value;
    this.show(x);
  }




  onCloseClick(): void {
    this.dialogRef.close();
  }

  modifier(){
    this.onCloseClick()
  }
}
