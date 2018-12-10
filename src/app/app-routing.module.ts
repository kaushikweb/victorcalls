import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './orders/login/login.component';
import { OrdersModule } from './orders/orders.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: '',
    loadChildren: './orders/orders.module#OrdersModule'
  },
  //{path: '**', component:LoginComponent}
  // {
  //   path: 'dfgd',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), OrdersModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
