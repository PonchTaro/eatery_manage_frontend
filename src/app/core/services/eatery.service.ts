import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class Eatery {
  id: number;
  name: string;
  address: string;
  tel: string;
}

@Injectable({
  providedIn: 'root'
})
export class EateryService {
  _eatery: Eatery;
  _eatery$: Subject<Eatery> = new Subject<Eatery>();

  constructor(
    private http: HttpClient
  ) { }

  getEeatery(id: number): Observable<Eatery> {
    return this.http.get<Eatery>(`api/v1/eateries/${id}/`).pipe(
      tap(val => this.setEatery(val))
    );
  }
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
}
