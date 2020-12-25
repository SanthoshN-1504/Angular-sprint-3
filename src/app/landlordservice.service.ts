import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandlordserviceService {
   updatelandlord: Landlords = new Landlords;
  constructor(private httpService: HttpClient) { }

  public getLandlords() {
    console.log("ins service get landlords");
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Landlords>("http://localhost:7878/landlord/findAll");
  }


  public addLandlord(addLandlord: Landlords) {
    console.log("ins service add");
    console.log(addLandlord);
    const headers = new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:7878/landlord/add", addLandlord, { headers, responseType: 'text' });
  }

  public update(updatelandlord: Landlords) {
    this.updatelandlord = updatelandlord;
  }
  public updateMethod() {
    return this.updatelandlord;
  }
  public onUpdate(updateLandlord: Landlords) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:7878/landlord/update", updateLandlord,  { headers, responseType: 'text'});
  }
  delete(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:7878/landlord/remove/" + id,  { headers, responseType: 'text'});
  }
}
export class Landlords {
  landlordId: number=0;
  landlordName: string="";
  landlordAge: number=0;

}