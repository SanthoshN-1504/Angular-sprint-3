import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onClickReset(){
    alert("Reset Password link is sent to your Registered Mail !!!");
    this.router.navigate(['landlordLogin'])
  }

}
