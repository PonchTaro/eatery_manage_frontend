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
    { name: '生ビール(中)', icon: 'local_drink', price: 298 },
    { name: 'ハイボール', icon: 'local_drink', price: 300 },
    { name: 'レモンサワー', icon: 'local_drink', price: 300 },
    { name: 'カシスオレンジ', icon: 'local_drink', price: 300 },
    { name: '烏龍茶', icon: 'local_drink', price: 300 },
  ];
  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.history.forEach(val => {
      this.total += val.price ? val.price : 0;
    });
  }

}
