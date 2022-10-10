import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product-model',
  templateUrl: './add-product-model.component.html',
  styleUrls: ['./add-product-model.component.css']
})
export class AddProductModelComponent implements OnInit {

  formSubmitted = false;
  addProductForm!: FormGroup; //this represents whole form
  productName!: FormControl;
  productPrice!: FormControl;
  productQty!: FormControl;
  productBrand!: FormControl;

  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {

    this.productName = new FormControl('',[Validators.minLength(3),Validators.required]);
    this.productPrice = new FormControl();
    this.productQty = new FormControl();
    this.productBrand = new FormControl();

    this.addProductForm = new FormGroup({
      'productName' : this.productName,
      'productPrice' : this.productPrice,
      'productQty' : this.productQty,
      'productBrand' : this.productBrand
    });
  }

  addProduct(product:Product){
    this.productService.addProduct(product);
    this.formSubmitted = true;
    this.router.navigateByUrl('/products');
  }

}
