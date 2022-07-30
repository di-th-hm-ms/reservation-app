import { Injectable } from '@angular/core';
import { mockProducts } from '../product-mock';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(
    private http: HttpClient
  ) {}

  getProducts = (): Observable<any> => {
  // getProducts = (): Product[] => {
    // const result: Product[] = [];
    // mockProducts.forEach(data => {
    //   const product = new Product(data.name, data.price, data.description,
    //     data.titles, data.bodies, data.coverImgPath);
    //   result.push(product);
    // });
    // return result
    // return this.http.get('http://localhost:3001/api/v1/products');
    // "start-devenv": "ng serve --proxy-config proxy.conf.json",
    return this.http.get('/api/v1/products');
  };

  // getProductById = (id: number): Product => {
  //   return new Product(mockProducts[id].name, mockProducts[id].price, mockProducts[id].description,
  //     mockProducts[id].titles, mockProducts[id].bodies, mockProducts[id].coverImgPath);
  // }
  getProductById = (id: number): Observable<any> => {
    return this.http.get('/api/v1/products/'+id);
  }
}
