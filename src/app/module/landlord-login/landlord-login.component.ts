import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserserviceService, userValidation } from 'src/app/userservice.service';

@Component({
  selector: 'app-landlord-login',
  templateUrl: './landlord-login.component.html',
  styleUrls: ['./landlord-login.component.css']
})
export class LandlordLoginComponent implements OnInit {

  constructor(private userservice: UserserviceService, private router: Router) { }

  public is_active: boolean = false

  ngOnInit(): void {
  }
  
  onButtonClick() {
    this.is_active = !this.is_active;
  }

  option: User = new User;

  onSubmit(user: userValidation): any {
    console.log(user.userName);
    console.log(user.password);
    this.userservice.validateUser(user.userName, user.password)
            .subscribe((data: any) => {
            this.option = data;

        if (this.option == null) {
          alert('Invalid Credentails');
          
        } 
        else if(this.option.userType == "TENANT")
        {
          alert('Login Successful');

          this.router.navigate(['generalviewlist',JSON.stringify(this.option)]);
        }
        else if(this.option.userType == "LANDLORD"){
          alert('Login Successful');
          this.router.navigate(['landlordPage']);
        }
        else if(this.option.userType == "ADMIN")
        {
          alert("Login Successfull");
          this.router.navigate(['admin']); 
        }
      });
  }

  onClickForgot(){
    this.router.navigate(['forgot'])
  }
}