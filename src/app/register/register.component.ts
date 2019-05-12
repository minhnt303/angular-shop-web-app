import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../login-app/login-app.component';
import { ValidationService } from '../validation/validation.service';
import { IfStmt } from '@angular/compiler';
import { UserService } from '../UserService';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup
  translate: TranslateService;
  constructor(private myForm: FormBuilder, private userService: UserService, private router: Router, translate: TranslateService,
    private localize: LocalizeRouterService) {
    this.translate = translate;
  }

  buildForm(): void {
    this.register = this.myForm.group
      ({
        name: this.myForm.control('', [Validators.required]),
        email: this.myForm.control('', [/*ValidationService.getErrorEmail,*/Validators.required]),
        username: this.myForm.control('', [Validators.required/*,ValidationService.getErrorUsername*/]),
        password: this.myForm.control('', [ValidationService.getRepasswordError2, Validators.required, Validators.minLength(8), ValidationService.passwordValidator]),
        confirmpassword: this.myForm.control('', [Validators.required,ValidationService.getRepasswordError]),
      })
  }

  ngOnInit() {
    this.buildForm();
  }
  submit() {
    if (this.register.valid) {
      var name = this.register.controls.name.value;
      var password = this.register.controls.password.value;
      var email = this.register.controls.email.value;
      var username = this.register.controls.username.value;
      var confirmpassword = this.register.controls.confirmpassword.value;
      var user = new User(name, email, username, password, confirmpassword);
      this.userService.postUser(user).subscribe(data => {
        user = data;
        console.log(this.translate.currentLang, this.localize.translateRoute('page'))
        this.router.navigate(['/', this.translate.currentLang, this.localize.translateRoute('page')])
        console.log(this.translate.currentLang, this.localize.translateRoute('page'))
        alert('thanh cong');
      });

    }

  }
  back() {
    if (localStorage.getItem('userToken') != null) { this.router.navigate([this.localize.translateRoute('/page')]) }
    else {this.router.navigate([this.localize.translateRoute('login')])
    console.log(this.localize.translateRoute('/login'))
    }
  }
}

