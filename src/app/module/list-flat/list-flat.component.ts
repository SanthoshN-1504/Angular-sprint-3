import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flat, FlatserviceService } from 'src/app/flatservice.service';
@Component({
  selector: 'app-list-flat',
  templateUrl: './list-flat.component.html',
  styleUrls: ['./list-flat.component.css']
})
export class ListFlatComponent implements OnInit {
  message: string="";
  flat: Flat[] = [];
  constructor(private myservice: FlatserviceService, private router: Router) { }

  ngOnInit(): any {
    this.myservice.getFlat().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response : any) {
    this.flat = response;
  }
  update(updateflat: Flat) {
    this.myservice.update(updateflat);
    this.router.navigate(['landlordPage/flat/updateflat']); 
  }
  delete(deleteFlat: Flat): any {
    var selection = confirm("Are you sure you want to delete?")
    if(selection==true) {
    this.flat.splice(this.flat.indexOf(deleteFlat), 1);
    this.myservice.delete(deleteFlat.flatId).subscribe(data => {
      alert(data);
 
    });
  }
    this.router.navigate(['landlordPage/flat/listflat']);
  }

  column: string = "flatId";
  order: string = "ascending";
  sort(column: string, order: string) {
    this.column = column;
    if(this.order == "ascending")
      this.order = "descending";

    else  this.order="ascending";

  }

  
}
