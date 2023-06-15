import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-carts',
  templateUrl: './all-carts.component.html',
  styleUrls: ['./all-carts.component.css']
})
export class AllCartsComponent implements OnInit{
  productCarts:any[] = [];
  total:number = 0;
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
    }
    this.getCartTotal()
  }
  getCartTotal(){
    this.total = 0;
    for(let i in this.productCarts){
      this.total += this.productCarts[i].item.price * this.productCarts[i].quantity;
    }
  }
  increaseAmount(index:number){
    this.productCarts[index].quantity++;
    this.getCartTotal()
    localStorage.setItem("cart",JSON.stringify(this.productCarts))
  }
  decreaseAmount(index:number){
    this.productCarts[index].quantity--;
    this.getCartTotal()
    localStorage.setItem("cart",JSON.stringify(this.productCarts))
  }
  detectChange(){
    localStorage.setItem("cart",JSON.stringify(this.productCarts))
  }
  deleteProduct(index:number){
    let confirmData = confirm("you want to delete")
    if(confirmData === true){
      this.productCarts.splice(index,1);
      localStorage.setItem("cart",JSON.stringify(this.productCarts))
    } else{
      return;
    }
  }
}
