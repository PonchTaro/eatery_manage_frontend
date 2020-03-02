import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-categorized-photos',
  templateUrl: './categorized-photos.component.html',
  styleUrls: ['./categorized-photos.component.scss']
})
export class CategorizedPhotosComponent implements OnInit {
  @Input() photos: Product[];

  @Output() selected = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  photoSelected(product: Product): void {
    this.selected.emit(product);
  }

}
