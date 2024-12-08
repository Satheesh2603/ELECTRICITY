import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  adminLogin={
    username:'',
    password:''
    };
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:any){
    if(this.adminLogin.username=='1234567' && this.adminLogin.password=='1234'){
  this.router.navigate(['/userscreen',this.adminLogin.username])
    }
  }
}
