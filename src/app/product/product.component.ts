import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()  product : Product = new Product();
  @Output()  deleted = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.deleted.emit(this.product);
  }

}
