import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/user/recipes/recipes.component';
import { MainComponent } from './components/user/main/main.component';
import { MainAComponent } from './components/admin/main-a/main-a.component';
import { ModifierProfileComponent } from './components/admin/modifier-profile/modifier-profile.component';
import { DashbordAdminComponent } from './components/admin/dashbord-admin/dashbord-admin.component';
import { FavoritesComponent } from './components/user/favorites/favorites.component';
import { CommunityComponent } from './components/user/community/community.component';
import { ChefComponent } from './components/user/chef/chef.component';

const routes: Routes = [
  {path:"main",component:MainComponent,children:[
    {path:"recipes",component:RecipesComponent},
    {path:"favorites",component:FavoritesComponent},
    {path:"community",component:CommunityComponent},
    {path:"chef",component:ChefComponent},
   
    {path:"",redirectTo:"recipes",pathMatch:"full"}
  ]},
  
  {path:"dashboard",component:DashbordAdminComponent, children:[ 
    {path:"main",component:MainAComponent,title:"Dashbord"},
    {path:"modifAdmin",component:ModifierProfileComponent,title:"Profile"},
    {path:"",redirectTo:"main",pathMatch:"full"}


  ]},
  {path:"",redirectTo:"main",pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
