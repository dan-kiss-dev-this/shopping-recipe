import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/11/23/14/37/baked-goods-1853261_960_720.jpg '
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2016/11/23/14/37/baked-goods-1853261_960_720.jpg '
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
