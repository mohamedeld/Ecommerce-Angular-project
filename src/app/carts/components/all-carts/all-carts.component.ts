import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-carts',
  templateUrl: './all-carts.component.html',
  styleUrls: ['./all-carts.component.css']
})
export class AllCartsComponent implements OnInit{
  productCarts:any[] = [];
  imageStyle={
    width:"100%",
    height:"5rem",
    objectFit:"cover"
  }
  constructor() { }
  ngOnInit(): void {
    console.log("ng onint ")
    this.getCartProduct();
  }
  getCartProduct(){
    if("cart" in localStorage){
      this.productCarts = JSON.parse(localStorage.getItem("cart")!);
      console.log(this.productCarts)
    }else{
      console.log('no data')
    }
  }
}
