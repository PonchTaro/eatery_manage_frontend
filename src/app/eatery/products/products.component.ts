import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderComponent } from './order/order.component';
import { ActivatedRoute } from '@angular/router';
import { EateryService } from 'src/app/core/eatery/eatery.service';
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
  voucherId: number;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private eateryService: EateryService,
  ) {
    // Routing完了後の初期動作
    this.route.params.subscribe(params => {
      this.voucherId = params['voucherId'];
      this.eateryService.getProducts(params['eatId']).subscribe(products => {
        const result = {};
        products.forEach(val => {
          if (val.category.name in result) {
            result[val.category.name].push(val);
          } else {
            result[val.category.name] = [val];
          }
        });
        this.items = result;
      });
    });
  }

  ngOnInit(): void {
  }

  openOrderDialog(product: Product): void {
    const dialogContext = {
      width: '60vh',
      height: '70vh',
      data: { product: product, voucherId: this.voucherId }
    };
    const dialogRef = this.dialog.open(OrderComponent, dialogContext);
    // ダイアログが閉じた後の動き
    dialogRef.afterClosed().subscribe(result => {
      if (result == undefined) {
        return;
      }
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
