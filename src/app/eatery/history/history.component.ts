import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '@app/core/product/order';
import { VoucherService } from '@app/core/voucher/voucher.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  orders: Order[] = [];
  total: number = 0;

  constructor(
    voucherService: VoucherService,
    route: ActivatedRoute,
  ) {
    route.params.subscribe(params => {
      voucherService.getOrders(params['voucerId']).subscribe(
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
