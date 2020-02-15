import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private htpp: HttpClient) { }

  checkUser(email: string, password: string) {
    return this.htpp.get("http://10.71.13.21:2000/api/checkuser/" + email + "/" + password, { observe: 'response' }) ;
  }

  addUser(user: User): Observable<User>{
    return this.htpp.post<User>('http://10.71.13.21:2000/api/adduser/', user, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })    
  }
}
