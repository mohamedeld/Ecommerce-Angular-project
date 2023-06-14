import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  cartProducts: any[] = [];
  products:any[] = [];
  categories:any[] =[];
  loader:boolean = false;
  title:string="Categories";

  constructor(public service:ProductsService,public router:Router){}
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
  addCart(event:any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!);
      let existId = this.cartProducts.find(item=> item.item.id === event.item.id);
      if(existId){
        return;
      }else{
        this.cartProducts.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))
      }
    }else{

      this.cartProducts.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartProducts));
    }

  }
  goToProduct(product:any){
    let productId =product.id;
    console.log(productId);
    this.router.navigate(["/details",productId]);
  }
}

