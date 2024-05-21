import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-modifier-cat',
  templateUrl: './modifier-cat.component.html',
  styleUrls: ['./modifier-cat.component.css']
})
export class ModifierCatComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModifierCatComponent>,@Inject(MAT_DIALOG_DATA) public cat: any,private fb:FormBuilder,private cservice:CategoryService){}

  Modif!:FormGroup

  ngOnInit(): void {
    this.Modif = this.fb.group({
      id : [this.cat.id],
      name : [this.cat.name]})
    }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  modifier(){
    this.cservice.updateCategory(this.Modif.value).subscribe((res)=>{
      console.log("resssss",res);
      
    })
    this.onCloseClick()
  }

}
