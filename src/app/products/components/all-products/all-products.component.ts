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
  loader:boolean = false;
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
    this.loader = true;
    this.service.getAllProductsService().subscribe((data:any)=>{
      this.products = data;
      this.loader= false;
    },err=>{
      console.log(err.message);
      this.loader= false;
    });
  }
  getCategories(){
    this.loader = true;
    this.service.getAllCategories().subscribe((data:any)=>{
      this.categories = data;
      this.loader = false;
    },err=> {
      console.log(err.message);
      this.loader = false;
    })
  }
  filterCategory(event:any){
    let value = event.target.value;
    if(value === "All"){
      this.getProducts();
    }else{
      this.getProductCategory(value);
    }
  }
  getProductCategory(word:string){
    this.loader = true;
      this.service.getProductByCategory(word).subscribe((data:any)=>{
        this.products = data;
        this.loader = false;
      },err=>{
        console.log(err);
      this.loader = false;
    });
  }
}

