import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecipesDetialsPage } from './recipes-detials.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesDetialsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecipesDetialsPage]
})
export class RecipesDetialsPageModule {}
