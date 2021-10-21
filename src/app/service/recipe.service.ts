import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shoping-list.service";

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      "Hamburger",
      "kolay hamburger tarifi için tıklayın",
      "https://www.kaloriver.com/uploads/nutrition/2579/hamburger_1.jpg",
      [new Ingredient("Hamburger Köftesi", 1), new Ingredient("Patates", 20)]
    ),
    new Recipe(
      "Another Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //copy of recipes array
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
