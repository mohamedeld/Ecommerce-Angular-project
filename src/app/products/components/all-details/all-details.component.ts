import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.css']
})
export class AllDetailsComponent implements OnInit {
  id:number=0;
  data:any = {};
  loader:boolean=false;
  constructor(private activateRouter:ActivatedRoute,private service:ProductsService,private router:Router) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe((params=>{
      this.id = params["id"];
      this.getProduct();
    }))
  }

  getProduct(){
    this.loader = true;
    this.service.getProductById(this.id).subscribe(res=>{
      this.data = res;
      this.loader =false;
    },err=>{
      console.log(err.message);
      this.loader = false;
    })
  }
  goHome(){
    this.router.navigateByUrl('/products');
  }
}
