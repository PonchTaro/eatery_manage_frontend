import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Eatery } from '@app/core/eatery/eatery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '@app/core/product/product.service';
import { Category } from '@app/core/product/category';
import { EateryService } from '@app/core/eatery/eatery.service';

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.scss']
})
export class CreateProductModalComponent {
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
    @Inject(MAT_DIALOG_DATA) public data: { eatery: Eatery },
    private productService: ProductService,
    private eateryService: EateryService,
    private fb: FormBuilder
  ) {
    this.eateryService.getCategories(data.eatery.id).subscribe(
      c => this.categories = c
    );
    this.productForm.patchValue({ eatery: data.eatery.id });
  }

  create(): void {
    console.log(this.productForm.value);
    if (this.productForm.valid) {
      this.productService.createProduct(
        this.productForm
      ).subscribe(res => this.dialogRef.close(res), error => console.log(error));
    }
  }

  addCategory(): void {

  }
}
