// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../UserService';
// import { User } from '../login-app/login-app.component';
// @Component({
//   selector: 'app-data-binding',
//   templateUrl: './data-binding.component.html',
//   styleUrls: ['./data-binding.component.css']
// })
// export class DataBindingComponent implements OnInit {
//   Data = [
//     new Data("Minh","123"),
//     new Data("Hiếu","123"),
//     new Data("Hiếu","123")
//   ]
//   constructor() { }

//   ngOnInit() {
//   }

// }
// export class Data{
//   constructor(public name:string, public pass:string){

//   }
// }
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../UserService';
import { User } from '../login-app/login-app.component';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
@Component({
  selector: 'app-page',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  User: User[] = [];
  
  dataSource : MatTableDataSource<User>;
  displayedColumns: string[] = ['Name', 'Email', 'Username', 'Password'];
  
  selection = new SelectionModel<User>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private Userservice: UserService) {
    this.Userservice.getUser().subscribe(data=>{
      this.User = data;
      console.log(data);
      this.dataSource = new MatTableDataSource(this.User);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
  }
  onRowClicked(row){
    console.log('Row clicked: ',row);
  }
  register() {
    this.router.navigate(['register']);
  }
  logout() {
    this.router.navigate(['login']);
  }
}

