import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { AllDetailsComponent } from './products/components/all-details/all-details.component';
import { AllCartsComponent } from './carts/components/all-carts/all-carts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:"products",component:AllProductsComponent},
  {path:"details",component:AllDetailsComponent},
  {path:"carts",component:AllCartsComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
