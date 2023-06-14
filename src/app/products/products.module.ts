import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { AllDetailsComponent } from './components/all-details/all-details.component';
import { ProductsService } from './services/products.service';
import { SharedModule } from '../shared/shared.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllProductsComponent,
    AllDetailsComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  providers:[
    ProductsService
  ],
  exports:[
    AllProductsComponent,FormsModule

  ]
})
export class ProductsModule { }
