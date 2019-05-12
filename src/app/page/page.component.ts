import { CanComponentDeactivate } from '../guards/confirmation/confirmation.guard'
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../UserService';
import { User } from '../login-app/login-app.component';
// import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup, /*FormControl,*/ AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidationService } from '../validation/validation.service';
import { TranslateService } from '@ngx-translate/core';
// import {TranslateService} from 'ng2-translate';
import { LocalizeRouterService } from 'localize-router';
export interface DialogData {
  Name: string;
  Email: string;
  Username: string;
  Password: string;
  Confirmpassword: string;
}
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, CanComponentDeactivate {


  User: User[] = [];
  name: string;
  selectUser: User[] = [];
  user: string[] = [];
  // user: User[] = [];
  data = Object.assign(User);
  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = ['Select', 'Name', 'Email', 'Username', 'Password', 'Edit'];

  selection = new SelectionModel<User>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router, private userService: UserService, public dialog: MatDialog
    ,private translate: TranslateService,  private localize: LocalizeRouterService
  ) {
    console.log(localStorage.getItem('userToken'))
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?username=' + localStorage.getItem('userToken');
    window.history.pushState({ path: newurl }, newurl);
    this.userService.getUser().subscribe(data => {
      this.User = data;
      this.dataSource = new MatTableDataSource(this.User);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    console.log(localStorage.getItem('userToken'))
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?username=' + localStorage.getItem('userToken');
    window.history.pushState({ path: newurl }, newurl);
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
    console.log(localStorage.getItem('userToken'))
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?username=' + localStorage.getItem('userToken');
    window.history.pushState({ path: newurl }, newurl);
  }
  onRowClicked(e, row) {
    this.name = row;
    if (e.checked) {
      var n = this.user.find(u => u == this.name);
      if (n) {
        console.log(this.user);
      }
      else {
        this.user.push(row);
      }
    }
    else {
      var m = this.user.find(u => u == this.name);
      this.user.splice(this.user.indexOf(row), 1);
    }
    // console.log(this.user)
    // if(n=this.name){
    //   this.user.splice(this.user.indexOf(row));
    // console.log(this.user)
    // }
    // console.log(n)
  }
  click(row) {
    console.log(row);
    this.router.navigate(['/', this.translate.currentLang, this.localize.translateRoute('pageedit')])
  }
  register() {
    this.router.navigate(['/', this.translate.currentLang, this.localize.translateRoute('register')])
  }
  logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/', this.translate.currentLang, this.localize.translateRoute('login')])
  }

  // delete() {
  //   for (var i = 0; i < this.user.length; i++) {
  //     var User = this.user[i];
  //     console.log(User)
  //     this.userService.deleteUser(User).subscribe(data => {
  //       console.log(data)
  //       // console.log(User)
  //       if (data.Name == User) {
  //         console.log("Delete user success!!!")
  //         var t = this.dataSource.data.findIndex(x => x.Name === User);
  //         this.dataSource.data.splice(t, 1);
  //         this.dataSource = new MatTableDataSource<User>(this.dataSource.data);
  //         this.dataSource.sort = this.sort;
  //         this.dataSource.paginator = this.paginator;
  //         this.user = [];
  //       }
  //       else {
  //         console.log("Delete user not success!!!")
  //       }
  //     });

  //   }
  //   // this.dataSource = new MatTableDataSource<User>(this.dataSource.data);
  //   // this.dataSource.sort = this.sort;
  //   // this.dataSource.paginator = this.paginator;
  //   // this.user = [];
  // }

  removeSelectedRows() {
    if (confirm('Are you sure you want to delete this user into the database?')) {
      this.selection.selected.forEach(item => {
        this.userService.deleteUser(item.Name).subscribe(data => {
          if (data.Name == item.Name) {
            console.log("Delete user success!!!")
            let index: number = this.dataSource.data.findIndex(d => d === item);
            // console.log(this.dataSource.data.findIndex(d => d === item));
            this.dataSource.data.slice(index)
            this.dataSource.data.splice(index, 1);
            this.dataSource = new MatTableDataSource<User>(this.dataSource.data);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.user = [];
          }
          else {
            console.log("Delete user not success!!!")
          }
        });
        this.selection = new SelectionModel<User>(true, []);
      });
    }
    else { }
  }

  openDialog(row): void {
    // this.dialog.afterOpen.subscribe
    let g = Object.assign({}, row);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '550px',
      height: '450px',
      data: g,
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(row)
      var update = result;
      console.log(result)
      if (result.Email != row.Email||result.Username != row.Username||result.Password != row.Password) {
        this.userService.updateUser(result).subscribe(data => {
          console.log('Successfull change User');
          console.log('The dialog was closed');
          var t = this.dataSource.data.findIndex(x => x === row);
          // console.log(t);
          this.dataSource.data.splice(t, 1, result)
          this.dataSource = new MatTableDataSource<User>(this.dataSource.data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.user = [];
          // console.log(update)
          // console.log(row)
          console.log("user have been changed!!!");
        });
        this.dataSource = new MatTableDataSource<User>(this.dataSource.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.user = [];
      }
      else {
        console.log("User not change!!!");
        this.dataSource = new MatTableDataSource<User>(this.dataSource.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.user = [];
      }
    });

  }
  confirm() {
    // if(localStorage.getItem('userToken') != null){
    //   this.router.navigate(['page']);
    //   console.log('sdf')}
    // if(this.router.navigate(['login'])){
    //   console.log('hsdhfbdshbf')
    // }
    return confirm('Are you sure you want to navigate away?')
  }
}
@Component({
  selector: 'app-page',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./dialog-overview-example-dialog.css']
})
export class DialogOverviewExampleDialog implements OnInit {
  dialogs: FormGroup
  constructor(private myForm: FormBuilder,
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    // console.log(data)
  }
  buildForm(): void {
    let Name = this.data.Name;
    let Email = this.data.Email;
    let Username = this.data.Username;
    let Password = this.data.Password;
    let Confirmpassword = this.data.Confirmpassword;
    this.dialogs = this.myForm.group
      ({
        // Name: this.myForm.control(Name, [Validators.required]),
        Email: this.myForm.control(Email, [/*ValidationService.getErrorEmail,*/Validators.required]),
        Username : this.myForm.control(Username, [Validators.required/*,ValidationService.getErrorUsername*/ ]),
        Password : this.myForm.control(Password, [/*ValidationService.getRepasswordError2,*/Validators.required, Validators.minLength(8), ValidationService.passwordValidator]),
        Confirmpassword : this.myForm.control(Confirmpassword, [Validators.required,/*ValidationService.getRepasswordError*/]),
      })
  }
  onNoClick(): void {
    this.dialogRef.close(this.dialogs.value);
    console.log(this.dialogs.value)
    console.log(this.data.Email)
  }
  ngOnInit() {
    this.buildForm();
  }
}

