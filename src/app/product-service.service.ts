import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private baseUrl = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  getProductList():Observable<any>{
    return this.http.get<Product>(this.baseUrl);
  }
}
