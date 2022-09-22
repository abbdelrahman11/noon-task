import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { objtoarraypipe } from './components/all-products/objtoarray.pipe';

@NgModule({
  declarations: [AllProductsComponent, objtoarraypipe],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class ProductsModule {}
