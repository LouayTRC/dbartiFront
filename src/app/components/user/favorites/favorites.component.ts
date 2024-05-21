import { Component } from '@angular/core';
import { RecipesAdminComponent } from '../../admin/recipes-admin/recipes-admin.component';
import { MatDialog } from '@angular/material/dialog';
import { AdddetailuserComponent } from '../adddetailuser/adddetailuser.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {

  constructor(private dialog: MatDialog) { }


  openDialog(x:number,r:any) {
    
    if(x==1)

   { this.dialog.open(AdddetailuserComponent);}

    else{
      this.dialog.open(RecipesAdminComponent,{
        data:r,
        width:'450px'
      });
    }

  }

}
