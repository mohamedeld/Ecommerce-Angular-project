import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { AllDetailsComponent } from './components/all-details/all-details.component';
import { ProductsService } from './services/products.service';



@NgModule({
  declarations: [
    AllProductsComponent,
    AllDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    ProductsService
  ],
  exports:[
    AllProductsComponent
  ]
})
export class ProductsModule { }
