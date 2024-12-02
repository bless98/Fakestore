import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full' },
  { path:'products', component: ProductsComponent},
  { path:'products/:id', component: SingleProductComponent},
  { path:'login', component: LoginComponent},
  { path:'cart', component: CartComponent},


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
