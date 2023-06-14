import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
