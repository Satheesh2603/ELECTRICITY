import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminscreen',
  templateUrl: './adminscreen.component.html',
  styleUrls: ['./adminscreen.component.css']
})
export class AdminscreenComponent implements OnInit {

  constructor(private router:Router) { }
  // customers = [
  //   { customerId: 101, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  //   { customerId: 102, name: 'Jane Smith', email: 'jane@example.com', phone: '234-567-8901' },
  //   { customerId: 103, name: 'Alice Johnson', email: 'alice@example.com', phone: '345-678-9012' },
  //   { customerId: 104, name: 'Bob Brown', email: 'bob@example.com', phone: '456-789-0123' }
  // ];
  customer = {
    customerId: '',
    name: '',
    email: '',
    address:'',
    phone: ''
  };
  ngOnInit(): void {
  }
  onSubmit(form:any) {
    // Validate that all fields are filled in
    if (this.customer.customerId && this.customer.name && this.customer.email && this.customer.phone) {
      // Add the new customer to the service
      //this.customerDataService.addCustomer(this.customer);

      // Reset the form fields to empty after saving
      this.customer = { customerId: '', name: '', email: '',address:'', phone: '' };
    } else {
      alert('Please fill in all fields'); // Alert if form validation fails
    }
  }
  reset(Form:any){
    this.customer = {
      customerId: '',
      name: '',
      email: '',
      address:'',
      phone: ''
    };
    Form.resetForm();
  }
  onRowClick(customer:any){
    console.log('**********',customer)
    this.customer={
      customerId: customer.customerId,
      name: customer.name,
      email: customer.email,
      address:customer.address,
      phone: customer.phone
    }
  }
  deletecustomer(){
    console.log('**********delete',this.customer)
    this.reset(this.customer)
  }
  generateBill(){
    this.router.navigate(['/bill-generation'])
  }
  viewPendingBills(){

  }
}
