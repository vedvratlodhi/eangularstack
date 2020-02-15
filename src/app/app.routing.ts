import { Routes, RouterModule } from '@angular/router';



import { SiteLayoutComponent } from './_layout/site-layout/site-layout.component';



import { ProductsGridComponent } from './products-grid/products-grid.component';
import { UserLoginComponent } from './user-login/user-login.component';

const appRoutes: Routes = [
    
    //Site routes goes here 
    { 
        path: '', 
        component: SiteLayoutComponent,
        children: [
          { path: '', component: ProductsGridComponent, pathMatch: 'full'}
        ]
    },
    

    //no layout routes
     { path: 'login', component: UserLoginComponent},
    // { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


