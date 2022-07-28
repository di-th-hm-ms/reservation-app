import { Injectable } from '@angular/core';
import { mockProducts } from '../product-mock';
import { Product } from '../product';

@Injectable()
export class ProductService {

  constructor() {}

  getProducts = (): Product[] => {
    const result: Product[] = [];
    mockProducts.forEach(data => {
      const product = new Product(data.name, data.price, data.description,
        data.titles, data.bodies, data.coverImgPath);
      result.push(product);
    });
    return result
  };

  getProductById = (id: number): Product => {
    return new Product(mockProducts[id].name, mockProducts[id].price, mockProducts[id].description,
      mockProducts[id].titles, mockProducts[id].bodies, mockProducts[id].coverImgPath);
  }
}
