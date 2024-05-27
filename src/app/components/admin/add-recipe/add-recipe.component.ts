import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/models/category';
import { Ingredient } from 'src/app/models/ingredient';
import { CategoryService } from 'src/app/services/category.service';
import { IngredientService } from 'src/app/services/ingredient.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit  {

  constructor(public dialogRef: MatDialogRef<AddRecipeComponent>,private formBuilder:FormBuilder,private categoryService:CategoryService,private rservice:RecipeService,private fireStorage:AngularFireStorage,private iservice:IngredientService) {}
  ingredients!:Ingredient[]
  file!:File
  file2!:File
  ajoutGroup!:FormGroup 
  selectedIng: Ingredient[]=[]
  categories!:Category[]

  ngOnInit(): void {
    


    this.ajoutGroup= this.formBuilder.group(
      
      {
        title: ['',Validators.required],
        description :['',Validators.required],
        duration:['',Validators.required],
        pic:[,Validators.required],
        nbCalories:[,Validators.required] ,
        category:[,Validators.required],
        tuto:[]
 
      }
    )
    this.iservice.getAllIngredients().subscribe((res)=>{
      this.ingredients=res
    })
    this.getCategories()

  }

  getCategories(){
    this.categoryService.getAllCategorys().subscribe(res=>{
      this.categories=res
    })
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  onReset(){
    this.ajoutGroup.reset();
  }

  async onAjoute(){
    if (this.file) {
      this.ajoutGroup.value.pic=await this.uploadFile(this.file,'images')
    } else {
      this.ajoutGroup.value.pic="assets/x.jpg"
    }
    if (this.file2) {
      this.ajoutGroup.value.tuto=await this.uploadFile(this.file2,'videos')
    }
    this.rservice.addRecipe(this.ajoutGroup.value).subscribe((res)=>{
      console.log("res",res);
      this.dialogRef.close(res);
    })
  }
  onFileChange(event:any){
    this.file=event.target.files[0];
    console.log("dd",this.file);
  }

  onFileChange2(event:any){
    this.file2=event.target.files[0];
    console.log("dd",this.file);
  }
  async uploadFile(file: File, folder: string) {
    const path = `recipes/${folder}/${file.name}`;
    const upload = await this.fireStorage.upload(path, file);
    const url = await upload.ref.getDownloadURL();
    return url;
  }
  chooseIngredient(ingredient: Ingredient) {
    const index = this.selectedIng.findIndex(item => item.id === ingredient.id);
    if (index === -1) {
      this.selectedIng.push(ingredient);
    } else {
      this.selectedIng.splice(index, 1);
    }
  }
}
