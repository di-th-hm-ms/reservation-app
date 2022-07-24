import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './product/product.module';
// import { ProductListComponent } from './product/product-list/product-list.component'
// import { ProductDetailComponent } from './product/product-detail/product-detail.component'

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full' }, // 現時点では表示するものがないため。
  // {path: '', component: ProductListComponent},
  // {path: 'detail', component: ProductDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
