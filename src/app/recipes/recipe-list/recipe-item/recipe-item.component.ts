import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/service/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }

  @Input() recipe: Recipe;

  ngOnInit() {
  }

  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }

}
