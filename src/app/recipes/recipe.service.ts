import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This is simply a test description 1',
      'https://cdn.pixabay.com/photo/2016/11/23/14/37/baked-goods-1853261_960_720.jpg ',
      [new Ingredient('Meat', 1), new Ingredient('Fries', 20)]
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test a test description 2',
      'https://cdn.pixabay.com/photo/2016/11/23/14/37/baked-goods-1853261_960_720.jpg ',
      [new Ingredient('Meat', 1), new Ingredient('Buns', 2)]
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
