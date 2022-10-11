import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerModelComponent } from './add-customer-model/add-customer-model.component';
import { AddProductModelComponent } from './add-product-model/add-product-model.component';
import { AddSellerTemplateComponent } from './add-seller-template/add-seller-template.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SellersComponent } from './sellers/sellers.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'add',component:AddProductModelComponent},
  {path:'addcustomer',component:AddCustomerModelComponent},
  {path:'home',component:HomeComponent},
  {path:'addseller',component:AddSellerTemplateComponent},
  {path:'sellers',component:SellersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
