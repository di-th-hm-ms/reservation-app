import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import { mockProducts } from '../product-mock';
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
          // observable json data
          this.productService.getProductById(+id).subscribe(
            (data: any) => {
              const titles: string[] = [data[0].title1, data[0].title2, data[0].title3];
              const bodies: string[] = [data[0].body1, data[0].body2, data[0].body3];
              this._product = new Product(data[0].id, data[0].name, data[0].price, data[0].description,
                titles, bodies, data[0].coverImgPath);
            }
          );
        }
      }
    });
  }

  get product(): Product {
    return this._product;
  }

}
