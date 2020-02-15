import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductsService } from '../Services/productservice';



import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';
import { SiteHeaderComponent } from './_layout/site-header/site-header.component';
import { SiteFooterComponent } from './_layout/site-footer/site-footer.component';


import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    ProductsGridComponent,
    
    SiteLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
