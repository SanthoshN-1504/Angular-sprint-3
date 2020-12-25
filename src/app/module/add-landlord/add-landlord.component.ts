import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Landlords, LandlordserviceService } from 'src/app/landlordservice.service';
@Component({
  selector: 'app-add-landlord',
  templateUrl: './add-landlord.component.html',
  styleUrls: ['./add-landlord.component.css']
})
export class AddLandlordComponent implements OnInit {
  message:string="Added successfully";
  constructor(private landlordservice: LandlordserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addLandlord:Landlords):any{
    alert("Added Successfully");
    console.log(addLandlord);
     this.landlordservice.addLandlord(addLandlord).subscribe(data => {
      alert(data);
      this.router.navigate(['landlordPage/listlandlord']);
    });
  }

 
}
