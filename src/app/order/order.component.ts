import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompleteOrderComponent } from './complete-order/complete-order.component';
import { Product } from '../product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  product: Product;

  constructor(
    public dialogRef: MatDialogRef<OrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product },
    private _snackBar: MatSnackBar,
  ) {
    this.product = data.product;
  }

  ngOnInit(): void {
  }

  clear(): void {
    this.dialogRef.close();
  }

  order(): void {
    this.dialogRef.close(this.product);
    const snackBarRef = this._snackBar.openFromComponent(
      CompleteOrderComponent,
      { data: this.product }
    );
    snackBarRef.afterDismissed().subscribe(
      _ => {
        console.log('注文完了');
      }
    );
  }
}
