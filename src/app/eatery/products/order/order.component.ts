import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/core/product/product';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { VoucherService } from '@app/core/voucher/voucher.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  product: Product;
  voucherId: number;
  numberForm: FormControl;

  constructor(
    public dialogRef: MatDialogRef<OrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { product: Product, voucherId: number },
    private voucherService: VoucherService,
    private fb: FormBuilder,
  ) {
    this.product = data.product;
    this.voucherId = data.voucherId;
    this.numberForm = this.fb.control(1, [Validators.min(1)]);
  }

  ngOnInit(): void {
  }

  clear(): void {
    this.dialogRef.close();
  }

  order(product: Product): void {
    // 明細に追加
    this.voucherService.order(this.voucherId, product, this.numberForm.value).subscribe(
      res => console.log(res)
    );
    this.dialogRef.close(this.product);
  }
}
