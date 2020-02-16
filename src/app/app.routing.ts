import { Routes, RouterModule } from '@angular/router';



import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';



import { ProductsGridComponent } from './products-grid/products-grid.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {ProductRegistrationComponent} from './product-registration/product-registration.component';

const appRoutes: Routes = [
    
    //Site routes goes here 
    { 
        path: '', 
        component: SiteLayoutComponent,
        children: [
          { path: '', component: ProductsGridComponent, pathMatch: 'full'},
          {path: 'productRegistration',component:ProductRegistrationComponent}

        ]
    },
    

    //no layout routes
     { path: 'login', component: UserLoginComponent},
     { path: 'register', component: UserRegistrationComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


