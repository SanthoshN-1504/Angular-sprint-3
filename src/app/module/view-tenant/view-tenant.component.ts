import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tenant, TenantserviceService } from 'src/app/tenantservice.service';

@Component({
  selector: 'app-view-tenant',
  templateUrl: './view-tenant.component.html',
  styleUrls: ['./view-tenant.component.css']
})
export class ViewTenantComponent implements OnInit {
 
  message:String="";
  tenant:Tenant[]=[];

  constructor(private myservice: TenantserviceService, private router: Router) { }

  ngOnInit(): any {
      this.myservice.getTenant().subscribe(
        response => this.handleSuccessfulResponse(response),
      );
    }
    handleSuccessfulResponse(response: any) {
      this.tenant = response;
    }
    update(updatetenant: Tenant) {
      this.myservice.updateTenant(updatetenant);
      this.router.navigate(['tenant/updatetenant']); //updating the tenant
    }
    delete(deleteTenant: Tenant): any {
      var selection = confirm("Are you sure you want to delete?")
    if(selection==true) {
      this.tenant.splice(this.tenant.indexOf(deleteTenant), 1);
      this.myservice.delete(deleteTenant.tenantId).subscribe(data => {
        alert(data);
   
      });
    }
      this.router.navigate(['tenant/viewtenant']);
    }
  
}