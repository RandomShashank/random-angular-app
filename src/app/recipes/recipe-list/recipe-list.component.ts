import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('test-recipe', 'test-desc', '../../images/pp.jpg'),
    new Recipe('another-test-recipe', 'test-desc', '../../images/dribble.jpg')
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onrecipeselected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
