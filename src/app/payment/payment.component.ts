import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  popup: boolean=false;

  constructor(private route:ActivatedRoute) { }
  paymentDetails :any= {
    billId: '',
    paymentMethod: '',
    amountPaid: null,
  };

  onSubmit() {
    console.log('Payment Details:', this.paymentDetails);
    this.popup=true
    alert('Payment submitted successfully!');
  }
  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    console.log(this.route.snapshot.paramMap.get('amount'));
    this.paymentDetails.billId=this.route.snapshot.paramMap.get('id');
    this.paymentDetails.amountPaid=this.route.snapshot.paramMap.get('amount');
  }

}
