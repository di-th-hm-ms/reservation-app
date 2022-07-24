import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
// import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';

@NgModule ({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductListComponent,
  ],
  imports: [
    ProductRoutingModule,
    CommonModule  // ngFor等を使うため。
  ],
  // providers: [

  // ],
  // bootstrap: []
})
export class ProductModule {}
