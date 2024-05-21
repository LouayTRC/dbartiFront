import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/user/recipes/recipes.component';
import { MainComponent } from './components/user/main/main.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { MainAComponent } from './components/admin/main-a/main-a.component';
import { FavoritesComponent } from './components/user/favorites/favorites.component';
import { CommunityComponent } from './components/user/community/community.component';
import { ChefComponent } from './components/user/chef/chef.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ListRecipesComponent } from './components/admin/list-recipes/list-recipes.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ProfileComponent } from './components/admin/profile/profile.component';
import { ModifierProfileComponent } from './components/admin/modifier-profile/modifier-profile.component';
import { DashbordAdminComponent } from './components/admin/dashbord-admin/dashbord-admin.component';
import { ListCatComponent } from './components/admin/list-cat/list-cat.component';
import { AddRecipeComponent } from './components/admin/add-recipe/add-recipe.component';
import { AddCategoryComponent } from './components/admin/add-category/add-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModifierCatComponent } from './components/admin/modifier-cat/modifier-cat.component';
import { RecipesAdminComponent } from './components/admin/recipes-admin/recipes-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    MainComponent,
    NavbarComponent,
    MainAComponent,
    FavoritesComponent,
    CommunityComponent,
    ChefComponent,
    LoginComponent,
    SignupComponent,
    ListRecipesComponent,
    ProfileComponent,
    ModifierProfileComponent,
    DashbordAdminComponent,
    ListCatComponent,
    AddRecipeComponent,
    AddCategoryComponent,
    ModifierCatComponent,
    RecipesAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
