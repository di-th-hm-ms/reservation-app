import { Component, OnInit } from '@angular/core';
// import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // private _products: Product[];
  // constructor() {
  //   this._products = [new Product("Mac"), new Product("Windows"), new Product("Linux")];
  //   console.log(this._products.length)
  // }

  ngOnInit(): void {
  }

  // get products(): Product[] {
  //   return this._products
  // }

}
