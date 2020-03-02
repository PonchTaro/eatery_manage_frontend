import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderComponent } from '../order/order.component';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  drinks: Product[] = [
    { label: '生ビール(中)', icon: 'local_drink', price: 298 },
    { label: 'ハイボール', icon: 'local_drink' },
    { label: 'レモンサワー', icon: 'local_drink' },
    { label: 'カシスオレンジ', icon: 'local_drink' },
    { label: '烏龍茶', icon: 'local_drink' },
  ];

  speeds: Product[] = [
    { label: '枝豆', icon: 'restaurant' },
    { label: 'たこわさ', icon: 'restaurant' },
    { label: 'チャンジャ', icon: 'restaurant' },
    { label: '唐揚げ', icon: 'restaurant' },
    { label: 'キムチ', icon: 'restaurant' },
  ];

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openOrderDialog(product: Product): void {
    const dialogRef = this.dialog.open(OrderComponent, {
      width: '50%',
      data: { product: product }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
