import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged = false ;
  
  login(user: User) {
    return this.http.post(this.baseurl,user);
  }
  constructor(public http: HttpClient,@Inject("baseUrl") public baseurl:string) {
    this.baseurl+="login";
  }
}
