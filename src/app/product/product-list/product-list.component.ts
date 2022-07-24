import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

import { mockProducts } from '../product-mock';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private _products: Product[] = [];
  constructor() {
    // this._products = [new Product("Mac"), new Product("Windows"), new Product("Linux")];
    this.handleJsonData();
    console.log(this._products.length);
  }

  ngOnInit(): void {
  }

  get products(): Product[] {
    return this._products
  }

  // set products(newProducts: Product[]) {
  //   this._products = newProducts;
  // }

  private handleJsonData = () => {
    let newProduct: Product;
    for (const datum of mockProducts) {
      newProduct = new Product(datum.name, datum.price, datum.description);
      this._products.push(newProduct);
    }
  };

}
