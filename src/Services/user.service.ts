import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private htpp: HttpClient) { }

  checkUser() {

  }

  addUser(user: User): Observable<User>{
    return this.htpp.post<User>('http://10.71.13.21:2000/api/adduser/', user, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })    
  }
}
