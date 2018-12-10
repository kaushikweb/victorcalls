import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderAddComponent } from './order-add/order-add.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.rectangleBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#7d9156', 
      secondaryColour: '#f7b332', 
      tertiaryColour: '#d25e30'
      
      
  }),
  ],
  declarations: [OrderListComponent, OrderAddComponent, LoginComponent]
})
export class OrdersModule { }
