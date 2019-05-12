import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../validation/validation.service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
    selector: 'app-control-messages',
    template:`<div *ngIf ="errorMessage !== null">{{errorMessage}}</div>`,
    styleUrls: [],
})
export class ControlMessagesComponent {
    @Input() control: FormControl;
    @Input() name: string;

    constructor(){}
    get errorMessage(){

        let _controls = this.control.parent.controls;
        // console.log(_controls);
        if(_controls instanceof Object){
            let key = Object.keys(_controls)
            // console.log(key)
        }
        
        for (let propertyName in this.control.errors) {
            // console.log(_controls);
            if (this.control.errors.hasOwnProperty(propertyName)&&this.control.touched || this.control.dirty){
                return this.name + ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName])
            }
        }
        return null;
    }
}