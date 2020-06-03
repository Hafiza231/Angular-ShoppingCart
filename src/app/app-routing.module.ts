import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { ElementComponent } from './element/element.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ProductAddComponent } from './Admin/product-add/product-add.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'Home'},
  {path:'Home',component:HomeComponent},
  {path:'productdetail/:id',component:ProductDetailComponent},
  {path:'product',component:ElementComponent,canActivate : [AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent},
  {path:'addproduct',component:ProductAddComponent},
  {path:'edit/:id',component:ProductAddComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
