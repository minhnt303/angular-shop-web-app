import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { PageComponent } from '../page/page.component';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidationService } from '../validation/validation.service';
export class editUser {
    newName: string;
    newEmail: string;
    newUsername: string;
    newPassword: string;
    rePassword: string;
    constructor(newName, newEmail, newUsername, newPassword, rePassword) {
      this.newName = newName;
      this.newEmail = newEmail;
      this.newUsername = newUsername;
      this.newPassword = newPassword;
      this.rePassword = rePassword;
    }
  }
@Component({
  providers:[PageComponent],
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  edit: FormGroup
  // user: User[] = [];
  editUser: editUser[] = [];
@Input() 
name:string;
  constructor(private myForm: FormBuilder,private router: Router, private cmp: PageComponent) { }

  buildForm(): void {
    this.edit = this.myForm.group
      ({
        // newName: this.myForm.control('', [Validators.required]),
        // newEmail: this.myForm.control('', [ValidationService.getErrorEmail,Validators.required]),
        // newUsername: this.myForm.control('', [Validators.required,ValidationService.getErrorUsername ]),
        // newPassword: this.myForm.control('', [ValidationService.getRepasswordError2,Validators.required, Validators.minLength(8), ValidationService.passwordValidator]),
        // rePassword: this.myForm.control('', [Validators.required,ValidationService.getRepasswordError]),
      })
  }
  ngOnInit(): void {
    this.buildForm();
  }
  click(){
    console.log(this.cmp.click);
  }
  back() {
    this.router.navigate(['page']);
  }
  change(){
    console.log("edit user success")
    console.log(this.cmp.user);
  }
}
