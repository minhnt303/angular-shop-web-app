import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from '../validation/validation.service';
import { UserService } from '../UserService';
import { MatTableDataSource } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from 'localize-router';
export class User {
  Name: string;
  email: string;
  Username: string;
  Password: string;
  confirmpassword: string;
  constructor(name, email, username, password, confirmpassword) {
    this.Name = name;
    this.email = email;
    this.Username = username;
    this.Password = password;
    this.confirmpassword = confirmpassword;
  }
}

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css'],
})

export class LoginAppComponent implements OnInit {
  dataSource: MatTableDataSource<User>;
  data = Object.assign(User);
  login: FormGroup
  User: User[] = [];
  name: string;
  pass: string;
  translate: TranslateService;

  constructor(private myForm: FormBuilder, private router: Router, private userService: UserService,
    translate: TranslateService, private localize: LocalizeRouterService) {
    this.userService.getUser().subscribe(data => {
      this.User = data;
      this.dataSource = new MatTableDataSource(this.User);
    })
    this.translate = translate;
  }
  buildForm(): void {
    this.login = this.myForm.group
      ({
        username: this.myForm.control('', [Validators.required, ValidationService.usernameValidator]),
        password: this.myForm.control('', [Validators.required, ValidationService.passwordValidator,/*hasExclamationMark*/])
      })
  }
  ngOnInit(): void {
    this.buildForm();
  }

  submit() {
    this.userService.getUser().subscribe(data => {
      this.User = data;
      var text = this.dataSource.data.find(x => x.Username === this.login.value.username && x.Password === this.login.value.password);
      if (text) {
        console.log('form submitted!!!');
        localStorage.setItem('userToken', this.login.value.username);
        this.router.navigate(['/', this.translate.currentLang, this.localize.translateRoute('page')])
      }
      else {
        console.log('form can not submitted!!!');
        this.router.navigateByUrl(this.router.url);
      }
    })
    console.log(this.dataSource.data.find(x => x.Username === this.login.value.username))
  }

  register() {
    this.router.navigate(['/', this.translate.currentLang, this.localize.translateRoute('register')])
  }

  webpage(){
    console.log(this.localize.translateRoute('/webpage'))
    this.router.navigate([this.localize.translateRoute('/webpage')]);
  }
}

export function patternValidator(regexp: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = control.value;
    if (value === '') {
      return null;
    }
    return !regexp.test(value) ? { 'patternInvalid': { regexp } } : null;
  };
}
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { 'forbiddenName': { value: control.value } } : null;
  };
}
// export function hasExclamationMark(input: FormControl) {
//   const user = 
//   console.log(user)
//   const m = this.User.find(name => name.username === this.login.value.username)
//   console.log(m)
//   const v = input.value.indexOf("admin")
//   console.log(v) 
//   // if(){}
//   const hasExclamation = input.value.indexOf('!') >= 0;
//   return hasExclamation ? null : { needsExclamation: true };
// }

export function sameName(same: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = control.value;
    if (value === '') {
      return null;
    }
    return !same.test(value) ? { 'same name': { same } } : null;
  };
}





