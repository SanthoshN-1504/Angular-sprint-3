import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService, User } from 'src/app/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userservice: UserserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  message : string = "";
  
  onSubmit(addUser:User):any{
    console.log(addUser);
    alert("Added Successfully");
    this.userservice.addUser(addUser).subscribe(data => {
      alert(data);
      this.router.navigate(['/landlordLogin']);
    });
  }

}

