import { Component, OnInit } from '@angular/core';
import { MockData } from '../mock-data/mock-product-data';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 products : Product[] = [];
  constructor(private productService : ProductService) { 
     // this.products = MockData.Products;
     this.products = productService.getProducts();
  }

  ngOnInit(): void {
  }

  deleteProduct(product:Product){
    this.productService.deleteProduct(product);
    this.products = this.productService.getProducts();
  }

}
