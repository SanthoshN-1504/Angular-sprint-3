import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  obj1: any;
  users: User[] = [];
  message: string = "";
  constructor(private myservice: UserserviceService, private router: Router) {
    this.obj1 = this.myservice.updateMethod();
  }
  onUpdate(updateUser: User): any {
    return this.myservice.onUpdate(updateUser).subscribe(data => {
      alert(data)
      this.router.navigate(['/listUser'])
    });
  }
  ngOnInit(): void {
  }
  

}
