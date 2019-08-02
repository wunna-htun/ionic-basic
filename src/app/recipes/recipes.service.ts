import { Injectable } from '@angular/core';
import { Recipes } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipes[] = [
    {id: 'r1',
    title: 'Title One',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/2/28/Galbi-tang_ingredients.jpg',
    ingredients:['ind one','ind two']
    },
    {id: 'r2',
    title: 'Title Two',
    imageUrl:'https://i0.wp.com/blog.hellofresh.co.uk/wp-content/uploads/2016/04/Italian_Kitchen_vertical_dinA4_VIEW_TO_CHECK_ENGLISH.jpg',
    ingredients:['ind one','ind two']
    },
    {id: 'r3',
    title: 'Title Three',
    imageUrl:'https://www.wfuv.org/sites/default/files/ingredients.jpg',
    ingredients:['ind one', 'ind two']
    }

]
  constructor() { }

  getAllRecipes() {
    return [...this.recipes ];
  }

  getRecipe(recipeId: string){

    return {...this.recipes.find(receipe => {
      // receipe.id ==recipeId
      // console.log("service"+ receipe.id)
      return receipe.id === recipeId;
    })
    }
  }

  deleteRecipe(recipeId:string){
    this.recipes=this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }

}
