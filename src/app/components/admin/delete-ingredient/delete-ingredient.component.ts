import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-ingredient',
  templateUrl: './delete-ingredient.component.html',
  styleUrls: ['./delete-ingredient.component.css']
})
export class DeleteIngredientComponent {

  
  constructor(public dialogRef: MatDialogRef<DeleteIngredientComponent>){}

  

  close(x:number){
    if(x==1){
      this.dialogRef.close(true)
    }
    else{
      this.dialogRef.close()
    }

  }
}
