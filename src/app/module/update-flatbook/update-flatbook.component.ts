import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flatbook, FlatbookserviceService } from 'src/app/flatbookservice.service';

@Component({
  selector: 'app-update-flatbook',
  templateUrl: './update-flatbook.component.html',
  styleUrls: ['./update-flatbook.component.css']
})
export class UpdateFlatbookComponent implements OnInit {
  obj1: any;
  flatbook: Flatbook[] = [];
  message: string="";

  constructor(private myservice: FlatbookserviceService, private router: Router) {
    this.obj1 = this.myservice.updateMethod();
  }
  onUpdate(uflatbook: Flatbook): any {
    return this.myservice.onUpdate(uflatbook).subscribe(data => {
    alert(data)
    this.router.navigate(['flatbooking/listflatbook'])
    });
    
  }

   ngOnInit(): void {
   }


}
