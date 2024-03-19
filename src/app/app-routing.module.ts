import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/user/recipes/recipes.component';
import { MainComponent } from './components/user/main/main.component';

const routes: Routes = [
  {path:"main",component:MainComponent,children:[
    {path:"recipes",component:RecipesComponent},
    {path:"",redirectTo:"recipes",pathMatch:"full"}
  ]},
  {path:"",redirectTo:"main",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
