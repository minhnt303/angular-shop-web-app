import { UserService } from '../UserService';
// import { User } from '../login-app/login-app.component';
import { MatTableDataSource } from '@angular/material';
export class ValidationService {
    // dataSource: MatTableDataSource<User>;
    //  data = Object.assign(User);
    // User: User[] = [];
    constructor(private userService: UserService){
        // this.userService.getUser().subscribe(data=>{this.User = data;
        //     this.dataSource = new MatTableDataSource(this.User);})
    }
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': ` required !!!!`,
            // 'required': `${name} Required` ,
            'invalidName': ' invalid name.',
            'invalidEmail': ' invalid email.',
            'invalidUsername': ' invalid. Username must be at least 4 character long.',
            'invalidPassword': ' invalid. Passwword must be at least 8-30 character.',
            'minlength': ` minimum length ${validatorValue.requiredLength}`,
            'sameEmail': ' has been used !!!',
            'sameUsername': ' has been used !!!',
            'samePass': ' not match!!!',
            'samePass2': ' not match!!!'
        };
        return config[validatorName];
    }

    static usernameValidator(control) {
        if (control.value.match(/^[a-zA-Z0-9!@#$%^&*]{4,30}$/)) {
            return null;
        }
        else {
            return { 'invalidUsername': true };
        }
    }

    static passwordValidator(control) {
        if (control.value.match(/^[a-zA-Z0-9!@#$%^&*]{8,30}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    }

    static getErrorEmail(control) {
        var user = [];
        user = JSON.parse(localStorage.getItem('user'));
        var user3 = user.find(c => c.email === control.value)
        if (user3) {
            return { 'sameEmail': true }
        }
        else {
            return null;
        }
    }

    // static getErrorUsername(control) {
    //     var user = [];
    //     user = JSON.parse(localStorage.getItem('user'));
    //     var user3 = user.find(c => c.username === control.value)
    //     if (user3) {
    //         return { 'sameUsername': true }
    //     }
    //     else {
    //         return null;
    //     }
    // }

    static getRepasswordError(control) {
        if (control && control.value) {
            if (control.value == control.parent.get('password').value && control.value) {
                control.parent.get('password').setErrors(null);
                return null;
            }
            else {
                return { 'samePass': true };
            }
        }
    }
    static getRepasswordError2(control) {
        if (control && control.value) {
            if (control.value == control.parent.get('confirmpassword').value && control.value) {
                control.parent.get('confirmpassword').setErrors(null);
                return null;
            }
            else {
                return { 'samePass2': true };
            }
        }
    }
}