import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flat, FlatserviceService } from 'src/app/flatservice.service';
import { User } from 'src/app/userservice.service';

@Component({
  selector: 'app-general-list-flat',
  templateUrl: './general-list-flat.component.html',
  styleUrls: ['./general-list-flat.component.css']
})
export class GeneralListFlatComponent implements OnInit {

  message: string = "";
  flat: Flat [] = [];
  flat1: Flat = new Flat;
  user: User = new User;
  constructor(private myservice: FlatserviceService, private router: Router, private route: ActivatedRoute) { 
    this.route.params.subscribe(value => {this.handleSuccessfulResponse1(value)})
      
  }
  handleSuccessfulResponse1(response: any) {
    this.user = response;
    console.log(this.user);
  }

  ngOnInit(): any {
    this.myservice.getFlat().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response: any) {
    this.flat = response;
    // this.flat1 = response[0];
    console.log(this.flat);
  }

  onClickBook() {
    // for(let i=0 ; i<=this.flat.length;i++)
    // {
    //   if(id == this.flat[i].flatId)
    //   {
    //     this.flat1 = this.flat[i];
    //   }
    // }
    // console.log(this.flat1);
    this.router.navigate(['/flatbooking/addflatbook',JSON.stringify(this.user),JSON.stringify(this.flat)]);
  }

  column: string = "flatId";
  order: string = "ascending";
  sort(column: string, order: string) {
    this.column = column;
  }
}
