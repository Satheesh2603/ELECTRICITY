import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminscreenComponent } from './adminscreen/adminscreen.component';
import { BillGenerationComponent } from './bill-generation/bill-generation.component';
import { UserscreenComponent } from './userscreen/userscreen.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';


const routes: Routes = [
  {
    path:'',component:HomeComponent,
  },
  {
    path:'admin-login',component:AdminLoginComponent,
  },
  {
    path:'user-login',component:UserLoginComponent,
  },
  {
    path:'admin-screen',component:AdminscreenComponent,
  },
  {
    path:'bill-generation',component:BillGenerationComponent,
  },
  {
    path:'userscreen/:id',component:UserscreenComponent,
  },
  {
    path:'payment/:id/:amount',component:PaymentComponent,
  },
  {
    path:'paymenthistory',component:PaymentHistoryComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
