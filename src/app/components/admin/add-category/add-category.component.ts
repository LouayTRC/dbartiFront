import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit  {

  constructor(public dialogRef: MatDialogRef<AddCategoryComponent>, private formBuilder: FormBuilder,private categoryService:CategoryService) { }


  ajoutGroup!: FormGroup

  ngOnInit(): void {



    this.ajoutGroup = this.formBuilder.group(

      {
        name: ['', Validators.required]
      })
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }


  onAjoute(){
    this.categoryService.addCategory(this.ajoutGroup.value).subscribe((res)=>{
      console.log("res",res);
      this.dialogRef.close(res);
    })
    

  }
}
