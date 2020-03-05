import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { EateryService } from './core/eatery/eatery.service';
import { Eatery } from './core/eatery/eatery';
import { VoucherService } from './core/voucher/voucher.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') sideNav: MatDrawer;
  eatery: Eatery;

  constructor(
    private router: Router,
    private eateryService: EateryService,
    private voucherService: VoucherService,
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      // router Eventの後はdrawerを閉じる
      this.sideNav.close();
      const eateryId = +e.url.split('/')[2];
      const voucherId = +e.url.split('/')[3];
      if (eateryId) {
        this.eateryService.getEeatery(eateryId).subscribe(
          e => this.eatery = e
        );
      }
      if (voucherId) {
        this.voucherService.getVoucher(voucherId).subscribe();
      }
    });
  }
}
