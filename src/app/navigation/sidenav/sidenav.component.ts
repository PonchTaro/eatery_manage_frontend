import { Component, OnInit } from '@angular/core';
import { Voucher } from '@app/core/voucher/voucher';
import { VoucherService } from '@app/core/voucher/voucher.service';
import { Eatery } from '@app/core/eatery/eatery';
import { EateryService } from '@app/core/eatery/eatery.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit {
  eatery: Eatery;
  voucher: Voucher;

  constructor(
    eateryService: EateryService,
    voucherService: VoucherService
  ) {
    eateryService.eatery$.subscribe(
      e => this.eatery = e
    );
    voucherService.voucher$.subscribe(
      v => this.voucher = v
    );
  }

  ngOnInit(): void {
  }

}
