import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes : Recipes[];
  constructor(private recipeServie: RecipesService) { }

  ngOnInit() {
   this.recipes= this.recipeServie.getAllRecipes()
   console.log(this.recipes)
  }

}
