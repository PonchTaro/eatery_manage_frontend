import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Eatery } from './eatery';


@Injectable({
  providedIn: 'root'
})
export class EateryService {
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

  getEeatery(id: number): Observable<Eatery> {
    return this.http.get<Eatery>(`api/v1/eateries/${id}/`).pipe(
      tap(val => this.setEatery(val))
    );
  }
}
