import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
  
  constructor(private http: HttpClient) {

  }

  getProductsData() {
    return this.http.get("http://10.71.13.21:2000/api/products");
  }
}
