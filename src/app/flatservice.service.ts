import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })

  export class FlatserviceService {
   updateflat: Flat = new Flat;
    constructor(private httpService: HttpClient) { } 
   public getFlat() {
      console.log("ins service get flat");
      const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
      return this.httpService.get<Flat>("http://localhost:7878/flats/all");
    }
  
    public addFlat(addflat: Flat) {
      console.log("ins service add");
      console.log(addflat);
      const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
      return this.httpService.post("http://localhost:7878/flats/add", addflat,  { headers, responseType: 'text'});
    }
   public update(updateflat: Flat) {
      this.updateflat = updateflat;
    }
    public updateMethod() {
      return this.updateflat;
    }
    public onUpdate(updateflat: Flat) {
      console.log("ins service update");
      const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
      return this.httpService.put("http://localhost:7878/flats/update", updateflat,  { headers, responseType: 'text'});
    }
    delete(id: number) {
      console.log("ins service delete");
      const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
      return this.httpService.delete("http://localhost:7878/flats/delete/" + id,  { headers, responseType: 'text'});
    }
    
  }
  export class Flat {
    flatId: number =0;
    cost: number=0;
    flatAddress: FlatAddress = new FlatAddress;
    availability:string="";
    
  }
  export class FlatAddress {
    houseNo:number=0;
    street: string="";
    city:string="";
    state:string="";
    pin:number=0;
    country:string="";

  }