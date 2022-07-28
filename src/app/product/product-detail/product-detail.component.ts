import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { mockProducts } from '../product-mock';
import { Product } from '../product';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private _product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) {
      this._product = new Product();
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params !== null) {
        // strange error occurs
        const id = params.get('productId');
        if (id !== null) {
          this._product = this.productService.getProductById(+id);
        }
      }
    });
  }

  get product(): Product {
    return this._product;
  }

}
