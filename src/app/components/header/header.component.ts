import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/services/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public totalproduct:any
  constructor(private cartser:CartapiService) { }
  ngOnInit(): void {
    this.cartser.getproduct().subscribe((res:any)=>{
      this.totalproduct = res.length;
    })
  }

}
