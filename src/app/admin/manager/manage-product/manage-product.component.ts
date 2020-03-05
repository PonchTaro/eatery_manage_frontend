import { Component, OnInit } from '@angular/core';
import { EateryService } from '@app/core/eatery/eatery.service';
import { Product } from '@app/core/product/product';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {
  products: Product[];
  displayedColumns: string[] = ['category', 'name', 'price', 'edit'];

  constructor(
    eateryService: EateryService,
  ) {
    eateryService.eatery$.subscribe(
      e => eateryService.getProducts(e.id).subscribe(
        products => this.products = products
      )
    );
  }

  ngOnInit(): void {
  }

}
