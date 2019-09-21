import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Pan de Banana', 'Pan hecho con banana', 'https://antojandoando.com/wp-content/uploads/2016/04/pan-de-banana-pinterest-pq.jpg'),
    new Recipe('Chicken Pizza', 'Pizza with chicken', 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS-2-696x696.jpg')
  ];

  
  constructor() { }

  ngOnInit() {
  }

  onRecipeSeleted(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
