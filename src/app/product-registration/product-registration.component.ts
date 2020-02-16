import { Component, OnInit } from '@angular/core';
import {ProductsService } from '../../Services/productservice';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'product-registration',
  templateUrl: './product-registration.component.html',
  styleUrls: ['./product-registration.component.css']
})
export class ProductRegistrationComponent implements OnInit {

  formData: any = {};
  isUserValid: boolean = true;

  constructor(private service: ProductsService) {

  }

  ngOnInit() {
  }

  checkUser(formData: NgForm) {
    alert('check user called');
    if (formData.valid) {
      this.formData = formData.value;
      this.service.addProduct(formData.value).subscribe((res: any) => {

      }, (error: any) => {
        this.isUserValid = false;
      });
    }
  }

}
