import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  message : string = "";
  users : User[] = [];
  constructor(private myservice: UserserviceService, private router: Router) { }

  ngOnInit(): any {
    this.myservice.getUser().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response : any) {
    this.users = response;
  }
  update(updateUser: User) {
    this.myservice.update(updateUser);
    this.router.navigate(['/updateUser']); //updating the employee
  }
  delete(deleteUser: User): any {
    var selection = confirm("Are you sure you want to delete?")
    if(selection==true) {
    this.users.splice(this.users.indexOf(deleteUser), 1);
    this.myservice.delete(deleteUser.userId).subscribe(data => {
      alert(data);

    });
  }
    this.router.navigate(['/listUser']);
  }
}
