import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {
  customers = [
    { paymentId: 1234567, billId: '34117',amountPaid:'1200', paymentdate: '02/02/2024',paymentMethod:'1000'},
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
