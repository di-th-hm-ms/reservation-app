import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

// import { mockProducts } from '../product-mock';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private _products: Product[] = [];
  constructor(
    private productService: ProductService
  ) {
    // this._products = [new Product("Mac"), new Product("Windows"), new Product("Linux")];
    this.handleJsonData();
    console.log(this._products.length);
  }

  ngOnInit(): void {

  }

  get products(): Product[] {
    return this._products
  }

  private handleJsonData = () => {
    this._products = this.productService.getProducts();
  };

}
