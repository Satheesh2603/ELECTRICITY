import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admingrid',
  templateUrl: './admingrid.component.html',
  styleUrls: ['./admingrid.component.css']
})
export class AdmingridComponent implements OnInit {
 // customers:any[]=[]
 @Output() rowClicked =new EventEmitter<any>();
  constructor() { }
customers = [
    { customerId: 101, name: 'John Doe', email: 'john@example.com',address:'Sample Address', phone: '123-456-7890' },
    { customerId: 102, name: 'Jane Smith', email: 'jane@example.com',address:'Sample Address',  phone: '234-567-8901' },
    { customerId: 103, name: 'Alice Johnson', email: 'alice@example.com',address:'Sample Address',  phone: '345-678-9012' },
    { customerId: 104, name: 'Bob Brown', email: 'bob@example.com',address:'Sample Address',  phone: '456-789-0123' }
  ];
  ngOnInit(): void {
  
  }
  onRowClick(customer:any){
    this.rowClicked.emit(customer);
  }

}
