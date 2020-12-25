import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
    updateUser: User = new User;
    constructor(private httpService: HttpClient) { }
    public getUser() {
      console.log("ins service get users");
      const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
      return this.httpService.get<User>("http://localhost:7878/user/all");
    }
  
    public addUser(addUser: User) {
      console.log("ins service add");
      console.log(addUser);
      const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
      return this.httpService.post("http://localhost:7878/user/add", addUser,  { headers, responseType: 'text'});
    }
    
    public update(updateUser: User) {
      this.updateUser = updateUser;
    }
    public updateMethod() {
      return this.updateUser;
    }
    public onUpdate(updateUser: User) {
      console.log("ins service update");
      const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
      return this.httpService.put("http://localhost:7878/user/update", updateUser,  { headers, responseType: 'text'});
    }
    delete(id: number) {
      console.log("ins service delete");
      const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
      return this.httpService.delete("http://localhost:7878/user/remove/" + id,  { headers, responseType: 'text'});
    }

    validateUser(userName: string, password: string) {
      const headers = new HttpHeaders().set(
        'Content_Type',
        'text/plain ;charset=utf-8'
      );
      return this.httpService.get('http://localhost:7878/user/validateuser/' +userName +'/' +password,{ headers });
    }
}

export class userValidation{
  userName: string = '';
  password: string = '';
}

export class User {
    userId: number = 0;
    userName: string = "";
    firstName : string = "";
    lastName : string = "";
    email : string = "";
    contactNo : string = "";
    address : string = "";
    userType : string = "";
    password: string = "";
  }