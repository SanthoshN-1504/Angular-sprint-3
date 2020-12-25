import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService, userValidation } from 'src/app/userservice.service';

@Component({
  selector: 'app-tenant-login',
  templateUrl: './tenant-login.component.html',
  styleUrls: ['./tenant-login.component.css']
})
export class TenantLoginComponent implements OnInit {

  constructor(private userservice: UserserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  option: boolean = false;

  onSubmit(user: userValidation): any {
    console.log(user.userName);
    console.log(user.password);
    this.userservice
      .validateUser(user.userName, user.password)
      .subscribe((data: any) => {
        this.option = data;
        if (this.option == false) {
          alert('Invalid Credentails');
        } else {
          alert('Login Successfully');
          this.router.navigate(['/generalviewlist']);
        }
      });
  }

}
