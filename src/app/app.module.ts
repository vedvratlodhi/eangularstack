import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsGridComponent } from './products-grid/products-grid.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { ProductsService } from 'src/Services/productservice';
import { UserService } from 'src/Services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsGridComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [ProductsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
