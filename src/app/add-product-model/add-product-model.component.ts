import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';

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

    this.productName = new FormControl('',[Validators.minLength(3),Validators.required]);
    this.productPrice = new FormControl('',[Validators.pattern('[0-9]'),Validators.required]);
    this.productQty = new FormControl('',Validators.required);
    this.productBrand = new FormControl();

    this.addProductForm = new FormGroup({
      'productName' : this.productName,
      'productPrice' : this.productPrice,
      'productQty' : this.productQty,
      'productBrand' : this.productBrand
    });
  }

}
