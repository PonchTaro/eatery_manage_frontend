import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EateryService } from '../core/eatery/eatery.service';
import { Eatery } from '../core/eatery/eatery';
import { InvoiceService } from '@app/core/invoice/invoice.service';
import { Invoice } from '@app/core/invoice/invoice';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  eatery: Eatery;
  invoice: Invoice;

  constructor(
    eateryService: EateryService,
    invoiceService: InvoiceService
  ) {
    eateryService.eatery$.subscribe(
      e => this.eatery = e
    );
    invoiceService.invoice$.subscribe(
      i => this.invoice = i
    );
  }

  ngOnInit(): void {
  }

}
