import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCartsComponent } from './components/all-carts/all-carts.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';



@NgModule({
  declarations: [
    AllCartsComponent,
    CartDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartsModule { }
