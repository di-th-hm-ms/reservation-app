import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

// import { mockProducts } from '../product-mock';
import { ProductService } from '../shared/product.service';
import { Observable } from 'rxjs';

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
    // this._products = this.productService.getProducts();
    const productsObservable: Observable<any> = this.productService.getProducts();

    // data stream from node server
    productsObservable.subscribe(
      // observer methods
      (data: any) => {
        console.log(data);
        data.forEach((datum: any) => {
          this._products.push(new Product(datum.id, datum.name, datum.price, datum.description,
            datum.titles, datum.bodies, datum.coverImgPath));
        });
      },
      (data: any) => { console.log("this error is output: "); console.log(data); },
      // () => { console.log("complete!") }
    )
  }

  // Observable example on rxjs documents
  // observable = new Observable((subscriber: Observable<any>) => {
  //   subscriber.next(1);
  //   subscriber.next(2);
  //   subscriber.error('error occurs');
  //   setTimeout(_ => {
  //     subscriber.next(4);
  //     subscriber.complete();
  //   }, 3000);
  // });
  // observable.subscribe(
  //   next(x) { console.log('get value: ' + x); },
  //   error(err) { console.log('somethign wrong occurs: ' + err); },
  //   complete() { console.log('complete'); }
  // );

  ngOnInit(): void {

  }

  get products(): Product[] {
    return this._products
  }

}
