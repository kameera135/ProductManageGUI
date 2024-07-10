import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { ProductsComponent } from './core/pages/products/products.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"products",
        component: ProductsComponent
    }
];
