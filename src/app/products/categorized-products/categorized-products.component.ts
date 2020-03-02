import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-categorized-products',
  templateUrl: './categorized-products.component.html',
  styleUrls: ['./categorized-products.component.scss']
})
export class CategorizedProductsComponent implements OnInit {
  @Input() products: Product[];
  @Input() category: string;

  @Output() selected = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  productSelected(product: Product): void {
    this.selected.emit(product);
  }

}
