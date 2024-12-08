import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-generation',
  templateUrl: './bill-generation.component.html',
  styleUrls: ['./bill-generation.component.css']
})
export class BillGenerationComponent implements OnInit {
  customer :any= {
    customerId: '',
    month: '',
    year: '',
    units: '',
    billamount:''
  };
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  years: string[] = [
    '2020', '2021', '2022', '2023', '2024', '2025',
    '2026', '2027', '2028', '2029','2030'
  ];
  
  selectedMonth: string = this.months[0];
  constructor() { }

  ngOnInit(): void {
  }
  reset(Form:any){
    this.customer = {
      customerId: '',
      month: '',
      year: '',
      units: '',
      billamount:''
    };
    Form.resetForm();
  }
  onSubmit(form:any) {
    if (this.customer.customerId && this.customer.month && this.customer.year && this.customer.units) {
      
      this.customer = { customerId: '', month: '', year: '', units: '' ,billamount:''};
      console.log('(****',this.customer)
    } else {
      alert('Please fill in all fields'); 
    }
   
    
  }
  change(units:any)
  {
    let amount=units*8;
    //String amt=amount;
    this.customer.billamount=amount;
  console.log('change',units) ;
  }

}
