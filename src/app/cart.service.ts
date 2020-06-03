import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
baseurl="http://localhost:3000/cart";
  constructor(private httpclient:HttpClient) { }

  addProductToCart(product: Product): Observable<any> {
    return this.httpclient.post(this.baseurl, { product });
  }
}
