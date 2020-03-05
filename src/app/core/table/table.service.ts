import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from './table';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Voucher } from '../voucher/voucher';


@Injectable({
  providedIn: 'root'
})
export class TableService {
  baseUrl = environment.versionPath;

  constructor(
    private http: HttpClient
  ) { }

  getTables(eatery_id: number): Observable<Table[]> {
    return this.http.get<Table[]>(`${this.baseUrl}/eateries/${eatery_id}/tables/`);
  }

  issueQRcode(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tables/${id}/issue-code/`);
  }
  occupy(id: number): Observable<Voucher> {
    return this.http.post<Voucher>(`${this.baseUrl}/tables/${id}/occupy/`, {});
  }

  free(id: number): Observable<Table> {
    return this.http.post<Table>(`${this.baseUrl}/tables/${id}/free/`, {});
  }

}
