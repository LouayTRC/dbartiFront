import { Component } from '@angular/core';
import { DeleteIngredientComponent } from '../delete-ingredient/delete-ingredient.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent {

  constructor( private formBuilder: FormBuilder,private dialog: MatDialog) { }


  ajoutGroup!: FormGroup

  ngOnInit(): void {



    this.ajoutGroup = this.formBuilder.group(

      {
        id: [],
        name: ['', Validators.required]
      })
  }

  lesIng:Ingredient[] = [
    new Ingredient(1,"Potato"),new Ingredient(2,"Hrissa"),new Ingredient(3,"Sugar"),new Ingredient(4,"ognion")
  ];

  lesIngAff:Ingredient[]=this.lesIng
  


  filtrer(s:string) {

    this.lesIngAff = this.lesIng

    if (s) {
       this.lesIngAff = this.lesIngAff.filter(e => e.name.toUpperCase().indexOf(s.toUpperCase()) == 0 )
      }


    
  }

  
  onAjoute(){
    if(!this.ajoutGroup.invalid)
    {this.lesIng.unshift(this.ajoutGroup.value)
      this.ajoutGroup.reset()
    this.filtrer("")}
  }

  delete(id:Number){
    const dialogRef = this.dialog.open(DeleteIngredientComponent);
    dialogRef.afterClosed().subscribe(x => {
   
      if(x!=undefined){
     
       this.lesIng= this.lesIng.filter(e => e.id !=id)
       this.filtrer("")
       

      }
    });

  }

}
