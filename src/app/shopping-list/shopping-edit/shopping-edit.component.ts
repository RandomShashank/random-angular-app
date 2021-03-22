import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameinputRef!: ElementRef;
  @ViewChild('amountInput') amountinputRef!: ElementRef;
  @Output() ingridientAdded = new EventEmitter<Ingredient>(); 

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingName = this.nameinputRef.nativeElement.value;
    const ingAmt = this.amountinputRef.nativeElement.value;
    const newIng = new Ingredient(ingName, ingAmt);
    this.ingridientAdded.emit(newIng);
     
  }

}
