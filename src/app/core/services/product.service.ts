import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(eatery_id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`api/v1/eateries/${eatery_id}/products/`);
  }
}
