import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  addBtn:boolean = false;
  amount:number=0;
  @Input() product:any = {};
  @Output() item = new EventEmitter();
  imgStyle={
    width:"100%",
    height:"20rem",
    objectFit:"cover"
  }
  addToCart(){
    this.item.emit({item:this.product,quantity:this.amount});
  }
}
