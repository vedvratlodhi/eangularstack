import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Product} from '../models/'
import { Observable } from 'rxjs';
@Injectable()
export class ProductsService {
  
  constructor(private http: HttpClient) {

  }

  getProductsData() {
    //return this.http.get("http://10.71.13.21:2000/api/products");
    //return this.http.get("http://www.mocky.io/v2/5e484b063000005800294ad9");
    return this.http.get("https://demo7659637.mockable.io/productList");
 }

 addProduct(product :Product): Observable<Product>{
   console.log(product);
    return this.http.post<Product>('http://10.71.13.21:2000/api/addproduct/ ', product, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })  
 }
}
