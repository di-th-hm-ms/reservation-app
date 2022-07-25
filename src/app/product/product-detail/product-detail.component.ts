import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { mockProducts } from '../product-mock';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private _product: Product;

  constructor(
    private route: ActivatedRoute,
    ) {
      this._product = new Product();
    }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params !== null) {
        // strange error occurs
        const id = params.get('productId');
        if (id !== null) {
          const datum = mockProducts[+id];
          this._product = new Product(datum.name, datum.price, datum.description);
          console.log(this._product)
        }
      }
    });
  }

  get product(): Product {
    return this._product;
  }

}
