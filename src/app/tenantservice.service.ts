import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TenantserviceService {
  updatetenant:Tenant=new Tenant;
  constructor(private httpService: HttpClient) { }
   public getTenant() {
    console.log("ins service get tenant");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Tenant>("http://localhost:7878/tenant/all");
   }
  public addTenant(addtenant: Tenant) {
    console.log("ins service add");
    console.log(addtenant);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:7878/tenant/add", addtenant,  { headers, responseType: 'text'});
  }
  
   public updateTenant(updatetenant: Tenant) {
     this.updatetenant = updatetenant;
   }
   public updateMethod() {
     return this.updatetenant;
   }
   public onUpdate(updatetenant: Tenant) {
     console.log("ins service update");
     const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
     return this.httpService.put("http://localhost:7878/tenant/update", updatetenant,  { headers, responseType: 'text'});
   }
   delete ( tenantId : number ) { console . log ( "ins service delete" ); 
   const headers = new HttpHeaders (). set ( 'Content_Type' , 'text/plain ;charset=utf-8' ); 
   return this.httpService.delete( "http://localhost:7878/tenant/delete/" + tenantId , { headers , responseType : 'text' }); 
  }

 }
export class Tenant {
  tenantId: number=0;
  age: number=0;
}
