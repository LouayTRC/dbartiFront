import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Ingredient } from 'src/app/models/ingredient';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent {
  lesIng!: Ingredient[]
  lesIngAff!: Ingredient[]
  constructor(private dialog: MatDialog, private iservice: IngredientService) { }




  ngOnInit(): void {

    this.iservice.getAllIngredients().subscribe((res) => {
      this.lesIng = res
      this.lesIngAff = structuredClone(this.lesIng)
    })
  }








  filtrer(s: string) {

    this.lesIngAff = this.lesIng

    if (s) {
      this.lesIngAff = this.lesIngAff.filter(e => e.name.toUpperCase().indexOf(s.toUpperCase()) == 0)
    }



  }


  onAjoute(name:String) {
    if(name.length!=0){
      this.iservice.addIng(name).subscribe((res)=>{
        console.log('res ing ',res);
        
        this.lesIngAff.push(res)
        this.lesIng.push(res)
      })
    }
  }

  delete(id: number) {
    this.iservice.deleteIng(id).subscribe((res) => {
      this.lesIngAff = this.lesIngAff.filter(element => element.id != id)
      this.lesIng = this.lesIng.filter(element => element.id != id)
    })

  }

}
