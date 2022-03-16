import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {
public cartItems:any =[];
public ProductList = new BehaviorSubject<any>([])
  constructor() { }
  getproduct(){
    return this.ProductList.asObservable();
  }
  addtocart(product:any){
    this.cartItems.push(product);
    this.ProductList.next(this.cartItems);
    this.gettoltalamount();    
  }
  gettoltalamount():number{
    let grandtotal = 0;
    this.cartItems.map((a:any)=>{
      grandtotal+=a.total;
    })
    return grandtotal;
  }
  removefromcart(product:any){
    this.cartItems.map((a:any,index:any)=>{
      if(product.id == a.id){
        this.cartItems.splice(index,1);
      }
    })
    this.ProductList.next(this.cartItems)
  }
  removeallfromcart(){
    this.cartItems = [];
    this.ProductList.next(this.cartItems);
  }
}
