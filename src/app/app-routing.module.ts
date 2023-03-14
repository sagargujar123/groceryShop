import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalOrderComponent } from './final-order/final-order.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'userlogin', pathMatch: 'full' },
  { path: 'userlogin', component: UserLoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'finalorder/:id', component: FinalOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
