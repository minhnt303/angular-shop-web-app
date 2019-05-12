import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../UserService';
import { MatTableDataSource } from '@angular/material';
import { User } from '../login-app/login-app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  dataSource: MatTableDataSource<User>;
  data = Object.assign(User);
  User: User[] = [];
  constructor(private router: Router, private userService: UserService){
    this.userService.getUser().subscribe(data=>{this.User = data;
      this.dataSource = new MatTableDataSource(this.User);
    // console.log(data)
  })
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      var pathname = window.location.pathname;
      // if(pathname == '/login' && localStorage.getItem('userToken')){
      if(localStorage.getItem('userToken') != null){
      // // logged in so return true
      return true;}
      // // not logged in so redirect to login page
      else {this.router.navigate(['/login'])
      return false;}

      // if(this.userService.isLoggedIn()){
      //   console.log('aaaaaa')
      //   return true;
      // }
      // else {
      //   window.alert("You dont have permission");
      //   return false;
      // }
  }
}
export class AuthGuard2 implements CanActivate {
  dataSource: MatTableDataSource<User>;
  data = Object.assign(User);
  User: User[] = [];
  constructor(private router: Router, private userService: UserService){
    this.userService.getUser().subscribe(data=>{this.User = data;
      this.dataSource = new MatTableDataSource(this.User);
    // console.log(data)
  })
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
        // if(!this.userService.isLoggedIn()){
        //     return true;
        // }
        // else {
        //     window.alert("Dont move");
        //     return false;
        // }
        if(localStorage.getItem('userToken') == null)
      return true;
      this.router.navigate(['/page'])
      return false;
    }}

