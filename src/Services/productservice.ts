import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
  
  constructor(private http: HttpClient) {

  }

  getProductsData() {
    //return this.http.get("http://10.71.13.21:2000/api/products");
    //return this.http.get("http://www.mocky.io/v2/5e484b063000005800294ad9");
    return this.http.get("https://demo7659637.mockable.io/productList");
 }
}
