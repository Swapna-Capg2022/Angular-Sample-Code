import { Injectable } from '@angular/core';
import { MockData } from './mock-data/mock-seller-data';
import { Seller } from './models/seller';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  sellers : Seller[] = [];
  constructor() { 
    this.sellers = MockData.Sellers;
  }

  addSeller(seller:Seller){
    this.sellers.push(seller);
  }

  getSellers():Seller[]{
      return this.sellers;
  }

  removeSeller(seller:Seller){
    let index = this.sellers.indexOf(seller);
    if(index !== -1){
        this.sellers.splice(index,1);
    }
  }
}
