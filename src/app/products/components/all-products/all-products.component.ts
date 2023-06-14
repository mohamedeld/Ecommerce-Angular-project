import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  products:any[] = [];
  categories:any[] =[];
  imgStyle={
    width:"100%",
    height:"20rem",
    objectFit:"cover"
  }
  constructor(public service:ProductsService){}
  ngOnInit(): void {
      this.getProducts();
      this.getCategories();
  }

  getProducts(){
    this.service.getAllProductsService().subscribe((data:any)=>{
      this.products = data;
    },err=>console.log(err.message));
  }
  getCategories(){
    this.service.getAllCategories().subscribe((data:any)=>{
      this.categories = data;
    },err=> console.log(err.message))
  }
  filterCategory(event:any){
    let value = event.target.value;
    this.getProductCategory(value);
  }
  getProductCategory(word:string){
    if(word === "All"){
      this.getProducts();
    }else{
      this.service.getProductByCategory(word).subscribe((data:any)=>{
        this.products = data;
      },err=>console.log(err));
    }
  }
}

