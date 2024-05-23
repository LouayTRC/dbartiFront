import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-cat',
  templateUrl: './delete-cat.component.html',
  styleUrls: ['./delete-cat.component.css']
})
export class DeleteCatComponent {


  
  constructor(public dialogRef: MatDialogRef<DeleteCatComponent>){}

  

  close(x:number){
    if(x==1){
      this.dialogRef.close(true)
    }
    else{
      this.dialogRef.close()
    }

  }
}
