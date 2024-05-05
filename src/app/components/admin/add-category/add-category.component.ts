import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit  {

  constructor(public dialogRef: MatDialogRef<AddCategoryComponent>, private formBuilder: FormBuilder) { }


  ajoutGroup!: FormGroup

  ngOnInit(): void {



    this.ajoutGroup = this.formBuilder.group(

      {
        id: [],
        name: ['', Validators.required]
      })
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }


  onAjoute(){

    this.onCloseClick()

  }
}
