import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-bills',
  templateUrl: './pending-bills.component.html',
  styleUrls: ['./pending-bills.component.css']
})
export class PendingBillsComponent implements OnInit {
  customers = [
    { customerId: 101, billId: '34117', duedate: '02/02/2024',billAmount:'1000', isPaid: false },
    { customerId: 102,billId: '32267', duedate: '02/02/2024',billAmount:'100', isPaid: false  },
    { customerId: 103,billId: '34537', duedate: '02/02/2024',billAmount:'1000', isPaid: false },
    { customerId: 104, billId: '34367', duedate: '02/02/2024',billAmount:'1400', isPaid: false  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
