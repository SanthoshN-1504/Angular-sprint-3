import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlatbookserviceService, Flatbook } from 'src/app/flatbookservice.service';
import { Flat } from 'src/app/flatservice.service';
import { User } from 'src/app/userservice.service';
@Component({
  selector: 'app-add-flatbook',
  templateUrl: './add-flatbook.component.html',
  styleUrls: ['./add-flatbook.component.css']
})
export class AddFlatbookComponent implements OnInit {
  message: string="";

  flat: Flat = new Flat;
  user: User = new User;
 constructor(private flatbookservice: FlatbookserviceService,private router: Router,private route: ActivatedRoute) { 
  this.route.params.subscribe(value => {this.handleSuccessfulResponse1(value)})

 }

 handleSuccessfulResponse1(response: any) {

  this.user = JSON.parse(response.user);
  this.flat = JSON.parse(response.flat);
  // this.flat = response[1];
  console.log(this.user);
  console.log(this.flat);
}

  ngOnInit(): void {
  }

  flatBook: Flatbook = new Flatbook;

  onSubmit(addflatbook:Flatbook):any{
    console.log(addflatbook);
    addflatbook.flat = this.flat;
    addflatbook.user = this.user;

    this.flatBook.bookingNo = addflatbook.bookingNo;
    this.flatBook.bookingFromDate = addflatbook.bookingFromDate;
    this.flatBook.bookingToDate = addflatbook.bookingToDate;

    alert("Added successfully");
    console.log(this.flatBook);
     this.flatbookservice.addFlatBook(this.flatBook).subscribe(data => {
      alert(data);
      this.router.navigate(['flatbooking/listflatbook']);
    });} 
}
