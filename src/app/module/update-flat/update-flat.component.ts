import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flat, FlatserviceService } from 'src/app/flatservice.service';
@Component({
  selector: 'app-update-flat',
  templateUrl: './update-flat.component.html',
  styleUrls: ['./update-flat.component.css']
})
export class UpdateFlatComponent implements OnInit {
  obj1: any;
  flat: Flat[] = [];
  message: string="";
  constructor(private myservice: FlatserviceService, private router: Router) { 
    this.obj1 = this.myservice.updateMethod();
  }
  onUpdate(uflat: Flat): any {
    alert("Updated successfully");
    return this.myservice.onUpdate(uflat).subscribe(data => {
      alert(data)
      this.router.navigate(['landlordPage/flat/listflat'])
    });
  }
  ngOnInit(): void {
  }

}
