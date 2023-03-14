import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private baseUrl = "http://localhost:3000/orders";
  private url = "http://localhost:3000/cart";
  constructor(private http: HttpClient) { }
  items: any = [];
  tempVar: any;

  sendProductToCart(product: any): Observable<any> {
    return this.http.post<Product>(`${this.url}`, product);
  }

  getOrderItems(): Observable<any> {
    return this.http.get<Product>(`${this.url}`);
  }

  removeOrderItem(id: any):Observable<any> {
    return this.http.delete<Product>(`${this.url}/${id}`)
  }

  checkOutOrder(order: any): Observable<any> {
    return this.http.post<Product>(`${this.baseUrl}`, order);
  }

  emptyCart(id:any):Observable<any>{
    return this.http.delete<Product>(`${this.url}/${id}`);
  }

  getFinalOrderData(id:any): Observable<any> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
}
