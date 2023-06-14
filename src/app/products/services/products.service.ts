import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient) { }

  getAllProductsService(){
    return this.http.get(environment.baseApi+'products')
  }
  getAllCategories(){
    return this.http.get(environment.baseApi+"products/categories");
  }
  getProductByCategory(word:string){
    return this.http.get(environment.baseApi+`products/category/${word}`);
  }
}
