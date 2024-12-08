import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
adminLogin={
username:'',
password:''
};
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
onSubmit(form:any){
  if(this.adminLogin.username=='madhan' && this.adminLogin.password=='1234'){
this.router.navigate(['/admin-screen'])
  }
}
}
