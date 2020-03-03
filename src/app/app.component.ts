import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatDrawer } from '@angular/material/sidenav';
import { EateryService, Eatery } from './core/services/eatery.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { InvoiceService } from './core/services/invoice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') sideNav: MatDrawer;

  constructor(
    private router: Router,
    private eateryService: EateryService,
    private invoiceService: InvoiceService,
  ) {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      // router Eventの後はdrawerを閉じる
      this.sideNav.close();
      const eateryId = +e.url.split('/')[2];
      // const InvoiceId = +e.url.split('/')[3];
      this.eateryService.getEeatery(eateryId).subscribe();
      // this.invoiceService.getInvoice(InvoiceId).subscribe();
    });
  }
}
