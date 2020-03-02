import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-complete-order',
  templateUrl: './complete-order.component.html',
  styleUrls: ['./complete-order.component.scss']
})
export class CompleteOrderComponent implements OnInit {
  constructor(
    public stackBarRef: MatSnackBarRef<CompleteOrderComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public product: Product
  ) { }

  ngOnInit(): void {
  }

  confirm(): void {
    this.stackBarRef.dismiss();
  }
}
