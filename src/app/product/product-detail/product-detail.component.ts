import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { mockProducts } from '../product-mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _product: Object = {}) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params !== null) {
        const id = params.get('productId');
        if (id !== null)
          this._product = mockProducts[+id];
      }
    });
  }

  get product(): Object {
    return this._product;
  }

}
