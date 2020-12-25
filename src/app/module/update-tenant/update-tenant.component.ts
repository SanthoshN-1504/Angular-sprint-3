import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tenant, TenantserviceService } from 'src/app/tenantservice.service';

@Component({
  selector: 'app-update-tenant',
  templateUrl: './update-tenant.component.html',
  styleUrls: ['./update-tenant.component.css']
})
export class UpdateTenantComponent implements OnInit {
  obj1: any;
  tenant: Tenant[]=[];
  message: string="";
  constructor(private myservice: TenantserviceService, private router: Router) {
    this.obj1 = this.myservice.updateMethod();
   }

  ngOnInit(): void {
    //alert("Update Successfully");
  }

  onUpdate(utenant: Tenant):any {
    alert("Updated successfully");
    return this.myservice.onUpdate(utenant).subscribe(data => {
      alert(data)
      this.router.navigate(['tenant/viewtenant'])
    });
  }

}
