import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productList:any=[];
filtercategory:any=[];
  constructor(private apis:ApiService, private cartserve:CartapiService, private route:Router) { }

  ngOnInit(): void {
    this.apis.getProducts().subscribe((res:any)=>{
      this.productList = res;
      this.filtercategory=res;
      console.log(this.productList);

      this.productList.forEach((a:any)=> {
        if(a.category=== "women's clothing"||a.category ==="men's clothing"){
          a.category === "fashion"
        };
        Object.assign(a,{quantity:1,total:a.price})
      });
      console.log(this.productList);
      
    })
    
  }
addtocart(product:any){
  this.cartserve.addtocart(product);
}
filterProducts(category:string){
  this.filtercategory = this.productList.filter((a:any)=>{
    if(a.category == category || category ==''){
      return a;
    }
  })
}
}
