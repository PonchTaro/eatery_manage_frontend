import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products/products.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  product: Product = { label: '生ビール(中)', icon: 'local_drink' };

  constructor(
    private route: ActivatedRoute
  ) {
    route.params.subscribe(
      params => console.log(params)
    );
  }

  ngOnInit(): void {
  }

}
