import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Invoice } from './invoice';
import { environment } from '@env/environment';
import { Product } from '../product/product';
import { Table } from '../table/table';
import { tap } from 'rxjs/operators';
import { Order } from '../product/order';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  baseUrl = environment.versionPath;
  _invoice: Invoice;
  _invoice$: Subject<Invoice> = new Subject<Invoice>();

  private setInvoice(val: Invoice) {
    this._invoice = val;
    this._invoice$.next(val);
  }

  get invoice(): Invoice {
    return this._invoice;
  }
  get invoice$(): Observable<Invoice> {
    return this._invoice$.asObservable();
  }

  constructor(
    private http: HttpClient,
  ) { }

  getInvoice(id: number): Observable<Invoice> {
    return this.http.get<Invoice>(`${this.baseUrl}/invoices/${id}/`).pipe(
      tap(val => this.setInvoice(val))
    );
  }

  getTable(id: number): Observable<Table> {
    return this.http.get<Table>(`${this.baseUrl}/invoices/${id}/table/`);
  }

  getOrders(id: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/invoices/${id}/orders/`);
  }

  order(id: number, product: Product, number: number = 1): Observable<Product[]> {
    return this.http.post<Product[]>(
      `${this.baseUrl}/invoices/${id}/add-product/`,
      { product: product.id, number: number }
    )
  }
}
