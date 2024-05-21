import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/models/category';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { ModifierCatComponent } from '../modifier-cat/modifier-cat.component';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-cat',
  templateUrl: './list-cat.component.html',
  styleUrls: ['./list-cat.component.css']
})
export class ListCatComponent {

  @ViewChild('scrollingWrapper') scrollingWrapper!: ElementRef;

  categories!: Category[] 

  constructor(private dialog: MatDialog,private categoryService:CategoryService) { }


  ngOnInit(){
    this.getAllCategories()
  }
 

  getAllCategories(){
    this.categoryService.getAllCategorys().subscribe((res)=>{
      this.categories=res
      console.log(this.categories);
      
    })
  }
  



  scrollLeft() {
    this.scrollingWrapper.nativeElement.scrollLeft -= 200;
  }

  scrollRight() {
    this.scrollingWrapper.nativeElement.scrollLeft += 200;
  }


  openDialog(x:number, c:any) {

    if(x==1)

    {this.dialog.open(AddCategoryComponent).afterClosed().subscribe((res)=>{
      console.log("lena",res);
      
      this.categories.push(res)
      console.log("categories",this.categories);
      
    })}

    else{
      this.dialog.open(ModifierCatComponent, {
        data:c
      });
    }

  }


  deleteCategory(id:Number){
    this.categoryService.deleteCategory(id).subscribe((res)=>{
      console.log("dd",res);
      
    })
  }

}
