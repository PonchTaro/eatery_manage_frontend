import { Component, OnInit } from '@angular/core';
import { EateryService } from '@app/core/eatery/eatery.service';
import { Product } from '@app/core/product/product';
import { MatDialog } from '@angular/material/dialog';
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';
import { Eatery } from '@app/core/eatery/eatery';
import { CreateProductModalComponent } from './create-product-modal/create-product-modal.component';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  products: Product[];
  eatery: Eatery;
  displayedColumns: string[] = ['category', 'name', 'price', 'star'];

  constructor(
    private eateryService: EateryService,
    public dialog: MatDialog,
  ) {
    eateryService.eatery$.subscribe(
      e => {
        this.eatery = e;
        this.getProducts(e);
      });
  }

  getProducts(e: Eatery): void {
    this.eateryService.getProducts(e.id).subscribe(
      products => this.products = products
    )
  }

  ngOnInit(): void {
  }

  edit(product: Product): void {
    const dialogRef = this.dialog.open(EditProductModalComponent, {
      width: '80%',
      data: { eatery: this.eatery, product: product }
    });
    // ダイアログが閉じた後の動き
    dialogRef.afterClosed().subscribe(_ => {
      this.getProducts(this.eatery);
    });
  }

  create(): void {
    const dialogRef = this.dialog.open(CreateProductModalComponent, {
      width: '80%',
      data: { eatery: this.eatery }
    });
    // ダイアログが閉じた後の動き
    dialogRef.afterClosed().subscribe(_ => {
      this.getProducts(this.eatery);
    });
  }

}
