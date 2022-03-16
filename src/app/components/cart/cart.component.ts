import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public productList:any =[];
public grandamount:number = 0;
  constructor(private cartservice : CartapiService) { }

  ngOnInit(): void {
    this.cartservice.getproduct().subscribe((res:any)=>{
      this.productList = res;
      this.grandamount = this.cartservice.gettoltalamount()
    })

  }
  remove(product:any){
    this.cartservice.removefromcart(product);
  }
  removeall(){
    this.cartservice.removeallfromcart();
  }
}
