import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Product } from '../product/product';
import { Table } from '../table/table';
import { tap } from 'rxjs/operators';
import { Order } from '../product/order';
import { Voucher } from './voucher';


@Injectable({
  providedIn: 'root'
})
export class VoucherService {
  baseUrl = environment.versionPath;
  _voucher: Voucher;
  _voucher$: Subject<Voucher> = new Subject<Voucher>();

  private setVoucher(val: Voucher) {
    this._voucher = val;
    this._voucher$.next(val);
  }

  get voucher(): Voucher {
    return this._voucher;
  }
  get voucher$(): Observable<Voucher> {
    return this._voucher$.asObservable();
  }

  constructor(
    private http: HttpClient,
  ) { }

  getVoucher(id: number): Observable<Voucher> {
    return this.http.get<Voucher>(`${this.baseUrl}/vouchers/${id}/`).pipe(
      tap(val => this.setVoucher(val))
    );
  }

  getTable(id: number): Observable<Table> {
    return this.http.get<Table>(`${this.baseUrl}/vouchers/${id}/table/`);
  }

  getOrders(id: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/vouchers/${id}/orders/`);
  }

  order(id: number, product: Product, number: number = 1): Observable<Product[]> {
    return this.http.post<Product[]>(
      `${this.baseUrl}/vouchers/${id}/add-product/`,
      { product: product.id, number: number }
    )
  }
}
