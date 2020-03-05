import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Product } from './product';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.versionPath;

  constructor(private http: HttpClient) { }

  createProduct(productForm: FormGroup): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products/`, productForm.value);
  }

  editProduct(id: number, productForm: FormGroup): Observable<Product> {
    return this.http.patch<Product>(`${this.baseUrl}/products/${id}/`, productForm.value);
  }

}
