import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '@app/core/invoice/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '@app/core/product/order';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  orders: Order[] = [];
  total: number = 0;

  constructor(
    invoiceService: InvoiceService,
    route: ActivatedRoute,
  ) {
    route.params.subscribe(params => {
      invoiceService.getOrders(params['invId']).subscribe(
        products => {
          this.orders = products;
          this.total = 0;
          this.orders.forEach(order => {
            this.total += order.product.price ? order.product.price * order.number : 0;
          });
        }
      );
    });
  }

  ngOnInit(): void {
  }

}
