import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';
import { Table } from './table.service';
import { HttpClient } from '@angular/common/http';

export class Invoice {
  table: Table;
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(
    private http: HttpClient,
  ) { }

  getInvoice(id: number): Observable<Invoice> {
    return this.http.get<Invoice>(`api/v1/invoices/${id}/`)
  }
}
