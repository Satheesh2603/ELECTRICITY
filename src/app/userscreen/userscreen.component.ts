import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userscreen',
  templateUrl: './userscreen.component.html',
  styleUrls: ['./userscreen.component.css']
})
export class UserscreenComponent implements OnInit {
  customers = [
    { customerId: 1234567, billId: '34117',electricityUsed:'1200', duedate: '02/02/2024',billAmount:'1000', isPaid: false },
  
  ];

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
  }

  onRowClick(customer:any){
    console.log('*********',customer)
    this.router.navigate(['/payment',customer.billId,customer.billAmount]);
   // this.router.navigate(['/userscreen',this.adminLogin.username])
  }
  paymenthistory(){
    this.router.navigate(['/paymenthistory']);
  }

}
