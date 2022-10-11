import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seller } from '../models/seller';
import { SellerService } from '../seller.service';

@Component({
  selector: 'app-add-seller-template',
  templateUrl: './add-seller-template.component.html',
  styleUrls: ['./add-seller-template.component.css']
})
export class AddSellerTemplateComponent implements OnInit {

  addSellerForm = false;
  seller :Seller = new Seller();
  constructor(private sellerServ:SellerService,
    private router:Router) { }

  ngOnInit(): void {
  }

  addSeller(seller:Seller){
    this.sellerServ.addSeller(seller);
    this.addSellerForm = true;
    this.router.navigateByUrl("/sellers");
  }


}
