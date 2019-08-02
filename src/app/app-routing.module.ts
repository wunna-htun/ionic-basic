import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'Recipes',pathMatch:'full' },
  { path: 'Recipes',

  children :[
    {
      path:'',loadChildren: './recipes/recipes.module#RecipesPageModule'
    },
    {
      path: ':recipeId',
    loadChildren: './recipes/recipes-detials/recipes-detials.module#RecipesDetialsPageModule'
    }
  ]
  }

 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
