import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';

import { UserLoginComponent } from './user-login/user-login.component';


import { UserService } from '../Services/user.service';
import { ProductsService } from '../Services/productservice';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {ProductRegistrationComponent} from './product-registration/product-registration.component';

import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';


import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    ProductsGridComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    ProductRegistrationComponent,
    SiteLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [ProductsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
