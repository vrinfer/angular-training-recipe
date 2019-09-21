import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef; 
  @ViewChild('amountInfo', { static: false }) amountInfoRef: ElementRef; 

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddRecipe() {
    //declaradas como constantes porque no van a cambiar
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInfoRef.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(ingredientName, ingredientAmount));
  }
}
