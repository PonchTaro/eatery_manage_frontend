import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  history: Product[] = [
    { label: '生ビール(中)', icon: 'local_drink', price: 298 },
    { label: 'ハイボール', icon: 'local_drink', price: 300 },
    { label: 'レモンサワー', icon: 'local_drink', price: 300 },
    { label: 'カシスオレンジ', icon: 'local_drink', price: 300 },
    { label: '烏龍茶', icon: 'local_drink', price: 300 },
  ];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.history.forEach(val => {
      this.total += val.price ? val.price : 0;
    });
  }

}
