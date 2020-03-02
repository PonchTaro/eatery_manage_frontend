import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Product } from '../products.component';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {
  @Input() items: Product[];

  selected = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  productSelected(): void {
    this.selected.emit(this.drinks[0]);
  }

}
