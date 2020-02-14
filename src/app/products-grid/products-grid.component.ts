import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/Services/productservice';


@Component({
  selector: 'products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  productData: any = [];
    
  constructor(private service: ProductsService) {
  }

  ngOnInit() {
    this.service.getProductsData().subscribe((res: Response) => {
      this.productData = res;      
    });  
  }    

}
