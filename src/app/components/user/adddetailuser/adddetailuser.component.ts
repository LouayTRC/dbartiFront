import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-adddetailuser',
  templateUrl: './adddetailuser.component.html',
  styleUrls: ['./adddetailuser.component.css']
})
export class AdddetailuserComponent implements OnInit{


  constructor(public dialogRef: MatDialogRef<AdddetailuserComponent>,private formBuilder:FormBuilder) {}
  user!: User;


  ajoutGroup!:FormGroup 




  ngOnInit(): void {
    


    this.ajoutGroup= this.formBuilder.group(
      
      {
        id: [],
        fullname: ['',Validators.required],
        username :['',Validators.required],
        mail:['',Validators.required],
     
 
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
