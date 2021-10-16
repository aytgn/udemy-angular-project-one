import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipeService } from "src/app/service/recipe.service";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private activeRoute: ActivatedRoute
  ) {}
  recipes: Recipe[];
  recipe: Recipe;
  recipeId: number;

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.recipeId = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.recipeId);
    });
  }

  onAddToShoppingList() {}
}
