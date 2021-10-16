import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
})
export class RecipeEditComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}

  id: number;
  editMode = false;

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
    });
  }
}
