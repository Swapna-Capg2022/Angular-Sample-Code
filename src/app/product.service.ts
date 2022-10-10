import { Injectable } from '@angular/core';
import { MockData } from './mock-data/mock-product-data';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [];
  constructor() { 
    this.products = MockData.Products;
  }

  getProducts() : Product[]{
    return this.products;
  }

  deleteProduct(product:Product){
    let index = this.products.indexOf(product);
    if(index !== -1){
        this.products.splice(index,1);
    }
  }
}
