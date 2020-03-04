import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Invoice } from './invoice';


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
