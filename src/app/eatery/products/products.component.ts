import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderComponent } from './order/order.component';
import { ActivatedRoute } from '@angular/router';
import { EateryService } from 'src/app/core/eatery/eatery.service';
import { ProductService } from 'src/app/core/product/product.service';
import { Product } from 'src/app/core/product/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompleteOrderComponent } from './complete-order/complete-order.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items: { [category: string]: Product[] };
  invoiceId: number;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.params.subscribe(params => {
      this.invoiceId = params['invId'];
      this.productService.getProducts(params['eatId']).subscribe(products => {
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
      width: '80%',
      data: { product: product, invoiceId: this.invoiceId }
    });
    // ダイアログが閉じた後の動き
    dialogRef.afterClosed().subscribe(result => {
      const snackBarRef = this._snackBar.openFromComponent(
        CompleteOrderComponent,
        { data: product, duration: 1000 }
      );
      snackBarRef.afterDismissed().subscribe(
        _ => {
          console.log('注文完了');
        }
      );
    });
  }

}
