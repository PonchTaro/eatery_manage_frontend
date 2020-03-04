import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderComponent } from './order/order.component';
import { ActivatedRoute } from '@angular/router';
import { EateryService } from 'src/app/core/eatery/eatery.service';
import { ProductService } from 'src/app/core/product/product.service';
import { Product } from 'src/app/core/product/product';

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
    // ダイアログが閉じた後の動き
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
