import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Eatery } from './eatery';
import { Product } from '../product/product';
import { environment } from '@env/environment';


@Injectable({
  providedIn: 'root'
})
export class EateryService {
  baseUrl = environment.versionPath;

  _eatery: Eatery;
  _eatery$: Subject<Eatery> = new Subject<Eatery>();
  private setEatery(val: Eatery) {
    this._eatery = val;
    this._eatery$.next(val);
  }

  get eatery(): Eatery {
    return this._eatery;
  }
  get eatery$(): Observable<Eatery> {
    return this._eatery$.asObservable();
  }

  constructor(
    private http: HttpClient
  ) { }

  getProducts(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/eateries/${id}/products/`);
  }

  getEeatery(id: number): Observable<Eatery> {
    return this.http.get<Eatery>(`${this.baseUrl}/eateries/${id}/`).pipe(
      tap(val => this.setEatery(val))
    );
  }

  getEeateries(): Observable<Eatery[]> {
    return this.http.get<Eatery[]>(`${this.baseUrl}/eateries/`);
  }

}
