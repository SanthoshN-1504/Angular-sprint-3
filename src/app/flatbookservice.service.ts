import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Flat } from './flatservice.service';
import { User } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class FlatbookserviceService {
  updateFlatbook: Flatbook = new Flatbook;
  constructor(private httpService: HttpClient) { }
  public getFlatbook() {
    console.log("ins service get flats booked");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.get<Flatbook>("http://localhost:7878/flatBooking/all");
  }

  public addFlatBook(addfbk: Flatbook) {
    console.log("ins service add");
    console.log(addfbk);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:7878/flatBooking/add", addfbk,  { headers, responseType: 'text'});
  }
   
  public update(updateflatbook: Flatbook) {
    this.updateFlatbook = updateflatbook;
  }
  public updateMethod() {
    return this.updateFlatbook;
  }
  public onUpdate(updateflatbooking: Flatbook) {
    console.log("ins service update");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.put("http://localhost:7878/flatBooking/update", updateflatbooking,  { headers, responseType: 'text'});
  }
  delete(id: number) {
    console.log("ins service delete");
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.delete("http://localhost:7878/flatBooking/remove/" + id,  { headers, responseType: 'text'});
  }
}

export class Flatbook {
  bookingNo:number=0;
  bookingFromDate : string ="";
  bookingToDate:string ="";
  user: User = new User;
  flat: Flat = new Flat;
}