import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { User } from './login-app/login-app.component';
import { Observable } from 'rxjs/Observable';
import {Headers, RequestOptions} from '@angular/http';
@Injectable()
export class UserService {
  constructor (
    private http: Http
  ) {}

  getUser() {
    return this.http.get('http://192.168.21.1:8088/api/Users').map((res:Response) => res.json());
  }
  postUser(User: User) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:64574/api/User/Post', User, options).map((res:Response) => res.json());
  }
  deleteUser(name: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete('http://localhost:64574/api/User/Delete?Name='+name, options).map((res:Response) => res.json());
  }
  updateUser(User: User){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    // let body = JSON.stringify(User);
    return this.http.put('http://localhost:64574/api/User/Put', User, options).map((res:Response) => res.json());
  }
  isLoggedIn(){
    if (localStorage.getItem('userToken')){
      return true;
    }
    else {
      return false;
    }
  }
  getProduct(){
    return this.http.get('http://192.168.21.1:8088/api/Product').map((res:Response) => res.json());
  }
}
