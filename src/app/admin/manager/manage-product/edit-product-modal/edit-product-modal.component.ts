import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateProductModalComponent } from '../create-product-modal/create-product-modal.component';
import { Product } from '@app/core/product/product';
import { Eatery } from '@app/core/eatery/eatery';
import { ProductService } from '@app/core/product/product.service';
import { EateryService } from '@app/core/eatery/eatery.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Category } from '@app/core/product/category';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss']
})
export class EditProductModalComponent implements OnInit {
  productForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    price: [0, [Validators.min(0), Validators.required]],
    category: [null, [Validators.min(0), Validators.required]],
    icon: ['', Validators.required],
    image: [],
    eatery: [null, Validators.required],
  });
  categories: Category[];

  constructor(
    public dialogRef: MatDialogRef<CreateProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { eatery: Eatery, product: Product },
    private productService: ProductService,
    private eateryService: EateryService,
    private fb: FormBuilder
  ) {
    this.eateryService.getCategories(data.eatery.id).subscribe(
      c => this.categories = c
    );
    console.log(this.data.product);
    this.productForm.patchValue({
      name: data.product.name,
      price: data.product.price,
      icon: data.product.icon,
      category: data.product.category.id,
      eatery: data.eatery.id
    });
    console.log(this.productForm.value);
  }

  ngOnInit(): void {
  }

  edit(product: Product): void {
    if (this.productForm.valid) {
      this.productService.editProduct(product.id, this.productForm).subscribe(res => {
        this.dialogRef.close(res)
      })
    }
  }

  addCategory(): void {

  }

}
