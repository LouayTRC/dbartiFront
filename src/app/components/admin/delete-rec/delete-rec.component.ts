import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-rec',
  templateUrl: './delete-rec.component.html',
  styleUrls: ['./delete-rec.component.css']
})
export class DeleteRecComponent {

  constructor(public dialogRef: MatDialogRef<DeleteRecComponent>){}

  

  close(x:number){
    if(x==1){
      this.dialogRef.close(true)
    }
    else{
      this.dialogRef.close()
    }

  }
}
