import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flat, FlatserviceService } from 'src/app/flatservice.service';

@Component({
  selector: 'app-add-flat',
  templateUrl: './add-flat.component.html',
  styleUrls: ['./add-flat.component.css']
})
export class AddFlatComponent implements OnInit {
  message: string = "";
  constructor(private myservice: FlatserviceService, private router: Router) { }
  flat: Flat = new Flat;
  ngOnInit(): void {
  }
  onSubmit(addflat: any): any {
    console.log(addflat);
    console.log(addflat.city);
    alert("Added successfully");
    this.flat.flatId = addflat.flatId;
    this.flat.availability = addflat.availability;
    this.flat.cost = addflat.cost;
    this.flat.flatAddress.houseNo = addflat.houseNo;
    this.flat.flatAddress.street = addflat.street;
    this.flat.flatAddress.city = addflat.city;
    this.flat.flatAddress.state = addflat.state;
    this.flat.flatAddress.country = addflat.country;
    this.flat.flatAddress.pin = addflat.pin;
    this.myservice.addFlat(this.flat).subscribe(data => {
      alert(data);
      this.router.navigate(['landlordPage/flat/listflat']);
    });
  }

}
