import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Landlords, LandlordserviceService } from 'src/app/landlordservice.service';

@Component({
  selector: 'app-view-landlord',
  templateUrl: './view-landlord.component.html',
  styleUrls: ['./view-landlord.component.css']
})
export class ViewLandlordComponent implements OnInit {
  message: string="";
  landlords: Landlords[]=[];
  constructor(private myservice: LandlordserviceService, private router: Router) { }

  ngOnInit(): any {
    this.myservice.getLandlords().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response: any) {
    this.landlords = response;
  }
  update(updateLandlord: Landlords) {
    this.myservice.update(updateLandlord);
    this.router.navigate(['landlordPage/updatelandlord']);
  }
  delete(deletelandlord: Landlords): any {
    var selection = confirm("Are you sure you want to delete?")
    if(selection==true) {
    this.landlords.splice(this.landlords.indexOf(deletelandlord), 1);
    this.myservice.delete(deletelandlord.landlordId).subscribe(data => {
      alert(data);

      });
    }
    this.router.navigate(['landlordPage/listlandlord']);
  }



}
