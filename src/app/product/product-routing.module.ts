import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: 'products', component: ProductComponent,
    children: [
      {path: '', component: ProductListComponent},
      {path: ':productId', component: ProductDetailComponent}
    ]
  }
];

@NgModule ({
  imports: [
    RouterModule.forChild(routes) // // forChildはrootから見たproductsを表す childrenとは別
  ],
  exports: [RouterModule]
})

export class ProductRoutingModule {

}
