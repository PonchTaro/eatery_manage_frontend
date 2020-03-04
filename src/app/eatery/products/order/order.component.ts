import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InvoiceService } from 'src/app/core/invoice/invoice.service';
import { Product } from 'src/app/core/product/product';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  product: Product;
  invoiceId: number;
  numberForm: FormControl;

  constructor(
    public dialogRef: MatDialogRef<OrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product, invoiceId: number },
    private invoiceService: InvoiceService,
    private fb: FormBuilder,
  ) {
    this.product = data.product;
    this.invoiceId = data.invoiceId;
    this.numberForm = this.fb.control(1, [Validators.min(1)]);
  }

  ngOnInit(): void {
  }

  clear(): void {
    this.dialogRef.close();
  }

  order(product: Product): void {
    // 明細に追加
    this.invoiceService.order(this.invoiceId, product).subscribe(
      res => console.log(res)
    );
    this.dialogRef.close(this.product);
  }
}
