import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/user/recipes/recipes.component';
import { MainComponent } from './components/user/main/main.component';
import { FavoritesComponent } from './components/user/favorites/favorites.component';
import { CommunityComponent } from './components/user/community/community.component';

const routes: Routes = [
  {path:"main",component:MainComponent,children:[
    {path:"recipes",component:RecipesComponent},
    {path:"favorites",component:FavoritesComponent},
    {path:"community",component:CommunityComponent},
    {path:"",redirectTo:"recipes",pathMatch:"full"}
  ]},
  {path:"",redirectTo:"main",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
