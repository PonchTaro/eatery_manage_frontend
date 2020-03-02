import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../product';
import { OrderComponent } from './order/order.component';
import { ProductService } from '../core/services/product.service';
import { EateryService } from '../core/services/eatery.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items: { [category: string]: Product[] };

  constructor(
    public dialog: MatDialog,
    private eateryService: EateryService,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.params.subscribe(params => {
      this.productService.getProducts(params['id']).subscribe(products => {
        const result = {};
        console.log(products);
        products.forEach(val => {
          if (val.category in result) {
            result[val.category].push(val);
          } else {
            result[val.category] = [val];
          }
        });
        this.items = result;
      });
    });
  }

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
