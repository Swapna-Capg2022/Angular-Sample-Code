import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerModelComponent } from './add-customer-model/add-customer-model.component';
import { AddProductModelComponent } from './add-product-model/add-product-model.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',component:ProductsComponent},
  {path:'add',component:AddProductModelComponent},
  {path:'addcustomer',component:AddCustomerModelComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
