import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCartsComponent } from './components/all-carts/all-carts.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllCartsComponent,
    CartDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AllCartsComponent,
    CartDetailsComponent
  ]
})
export class CartsModule { }
