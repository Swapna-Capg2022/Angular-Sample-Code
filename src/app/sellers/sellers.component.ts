import { Component, OnInit } from '@angular/core';
import { Seller } from '../models/seller';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit {

  sellers : Seller[] = [];
  constructor(private sellerServ:SellerService) { 
    this.sellers = sellerServ.getSellers();
  }

  ngOnInit(): void {
  }

}
