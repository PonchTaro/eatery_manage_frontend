import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from './table';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


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

  use(id: number): Observable<Table> {
    return this.http.post<Table>(`${this.baseUrl}/tables/${id}/use/`, {});
  }

  free(id: number): Observable<Table> {
    return this.http.post<Table>(`${this.baseUrl}/tables/${id}/free/`, {});
  }

}
