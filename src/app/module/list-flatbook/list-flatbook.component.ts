import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flatbook, FlatbookserviceService } from 'src/app/flatbookservice.service';

@Component({
  selector: 'app-list-flatbook',
  templateUrl: './list-flatbook.component.html',
  styleUrls: ['./list-flatbook.component.css']
})
export class ListFlatbookComponent implements OnInit {

  message: string="";
  flatbook: Flatbook[] = [];
  constructor(private myservice: FlatbookserviceService, private router: Router) {
  }

  ngOnInit(): any {
    this.myservice.getFlatbook().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response : any) {
    this.flatbook = response;
  }
  update(updateflatbook: Flatbook) {
    this.myservice.update(updateflatbook);
    this.router.navigate(['flatbooking/updateflatbook']); 
  }
  delete(deleteflatbook: Flatbook): any {
    var selection = confirm("Are you sure you want to delete?")
    if(selection==true) {
    this.flatbook.splice(this.flatbook.indexOf(deleteflatbook), 1);
    this.myservice.delete(deleteflatbook.bookingNo).subscribe(data => {
      alert(data);
 
    });
  }
    this.router.navigate(['flatbooking/listflatbook']);
  }
}
