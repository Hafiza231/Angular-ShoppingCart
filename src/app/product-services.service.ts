import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
 
baseurl="http://localhost:3000/product";
  constructor(private httpclient:HttpClient) { 
    
  }
  // addcart():void{
  //   //this.isAddedToCart=true;
  //   this.product[8].isAddedToCart=true;
  // }

  product:Product[]=[];
  public getproduct():Observable<Product[]>{
    return this.httpclient.get<Product[]>( `${this.baseurl}`);
  }
  public getproductDetail(id:number):Observable<Product>{
    return this.httpclient.get<Product>(`${this.baseurl}/${id}`);
  }
  public addproduct(product:Product):Observable<Product>{
    return this.httpclient.post<Product>(`${this.baseurl}`,product,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
      })
  }
 //Edit the product
public updateproduct(product:Product):Observable<void>{
  return this.httpclient.put<void>(`${this.baseurl}/${product.id}`,product,{
    headers:new HttpHeaders({
        'Content-Type':'application/json'
    })
  })
} 
}
