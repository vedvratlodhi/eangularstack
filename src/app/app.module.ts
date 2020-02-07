import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { ProductsService } from 'src/Services/productservice';


@NgModule({
  declarations: [
    AppComponent,
    ProductsGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
