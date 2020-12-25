import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tenant, TenantserviceService } from 'src/app/tenantservice.service';

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.css']
})
export class AddTenantComponent implements OnInit {
   message:String="";
  constructor(private myservice: TenantserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(addtenant:Tenant):any{
    alert("Added Successfully!!!");
    console.log(addtenant);
     this.myservice.addTenant(addtenant).subscribe(data => {
      alert(data);
      this.router.navigate(['tenant/viewtenant']);
    });
}
}
