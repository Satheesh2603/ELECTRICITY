import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { AdminscreenComponent } from './adminscreen/adminscreen.component';
import { AdmingridComponent } from './admingrid/admingrid.component';
import { BillGenerationComponent } from './bill-generation/bill-generation.component';
import { PendingBillsComponent } from './pending-bills/pending-bills.component';
import { UserscreenComponent } from './userscreen/userscreen.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    UserLoginComponent,
    AdminscreenComponent,
    AdmingridComponent,
    BillGenerationComponent,
    PendingBillsComponent,
    UserscreenComponent,
    PaymentComponent,
    PaymentHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
