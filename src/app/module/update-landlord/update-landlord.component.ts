import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Landlords, LandlordserviceService } from 'src/app/landlordservice.service';

@Component({
  selector: 'app-update-landlord',
  templateUrl: './update-landlord.component.html',
  styleUrls: ['./update-landlord.component.css']
})
export class UpdateLandlordComponent implements OnInit {
  obj1: any;
  landlords: Landlords[]=[];
  message: string="Updated successfully";
  constructor(private myservice: LandlordserviceService, private router: Router) 
  { 
    this.obj1 = this.myservice.updateMethod();
  }
  onUpdate(ulandlord: Landlords): any {
    return this.myservice.onUpdate(ulandlord).subscribe(data => {
      alert(data)
      this.router.navigate(['landlordPage/listlandlord'])
    });
  }

  ngOnInit(): void {
  }

}
