import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/models/category';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { ModifierCatComponent } from '../modifier-cat/modifier-cat.component';

@Component({
  selector: 'app-list-cat',
  templateUrl: './list-cat.component.html',
  styleUrls: ['./list-cat.component.css']
})
export class ListCatComponent {

  constructor(private dialog: MatDialog) { }



  @ViewChild('scrollingWrapper') scrollingWrapper!: ElementRef;

  lesCats: Category[] = [new Category(1, "Tunisian"), new Category(2, "Asian"), new Category(3, "Italian"),new Category(1, "Tunisian"),
  new Category(2, "Asian"), new Category(3, "Italian"), new Category(1, "Tunisian"), new Category(2, "Asian"), new Category(3, "Italian")]

  scrollLeft() {
    this.scrollingWrapper.nativeElement.scrollLeft -= 200;
  }

  scrollRight() {
    this.scrollingWrapper.nativeElement.scrollLeft += 200;
  }


  openDialog(x:number, c:any) {

    if(x==1)

    {this.dialog.open(AddCategoryComponent);}

    else{
      this.dialog.open(ModifierCatComponent, {
        data:c
      });
    }

  }


  delete(){

  }

}
