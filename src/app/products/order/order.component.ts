import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompleteOrderComponent } from './complete-order/complete-order.component';
import { Product } from 'src/app/product';
import { InvoiceService } from 'src/app/core/services/invoice.service';

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
    private invoiceService: InvoiceService,
  ) {
    this.product = data.product;
  }

  ngOnInit(): void {
  }

  clear(): void {
    this.dialogRef.close();
  }

  order(): void {
    // 明細に追加
    this.dialogRef.close(this.product);
    const snackBarRef = this._snackBar.openFromComponent(
      CompleteOrderComponent,
      { data: this.product, duration: 1000 }
    );
    snackBarRef.afterDismissed().subscribe(
      _ => {
        console.log('注文完了');
      }
    );
  }
}
