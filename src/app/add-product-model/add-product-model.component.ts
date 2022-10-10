import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-product-model',
  templateUrl: './add-product-model.component.html',
  styleUrls: ['./add-product-model.component.css']
})
export class AddProductModelComponent implements OnInit {

  addProductForm!: FormGroup; //this represents whole form
  productName!: FormControl;
  productPrice!: FormControl;
  productQty!: FormControl;
  productBrand!: FormControl;

  constructor() { }

  ngOnInit(): void {

    this.productName = new FormControl();
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

}
