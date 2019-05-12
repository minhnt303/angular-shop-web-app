import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LocalizeRouterService } from 'localize-router';
import { FormControl } from '@angular/forms';
import { windowWhen } from 'rxjs-compat/operator/windowWhen';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  translate: TranslateService;
  mode = new FormControl('over');
  changeLanguage(language: string) {
    this.switchLanguage(language);
    this.updateUrl();
    console.log(window.location.pathname.slice(4))
    console.log(window.location.pathname.slice(4))
  }
  switchLanguage(language: string) {
    this.localize.changeLanguage(language);
  }
  updateUrl() {
    if (window.location.pathname.slice(4) == 'login' || window.location.pathname.slice(4) == 'anmeldung') {
      this.router.navigate([this.localize.translateRoute('/login')]);
    }
    else if (window.location.pathname.slice(4) == 'register' || window.location.pathname.slice(4) == 'registrieren') {
      this.router.navigate([this.localize.translateRoute('/register')]);
    }
    else if (window.location.pathname.slice(4) == 'page' || window.location.pathname.slice(4) == 'seite') {
      this.router.navigate([this.localize.translateRoute('/page')]);
    }
  }

  constructor(translate: TranslateService, private router: Router, private localize: LocalizeRouterService) {
    this.translate = translate;
    this.router.config = this.localize.parser.routes;
  }
  home() {
    this.router.navigate([this.localize.translateRoute('/webpage')])
  }
  ngOnInit() {
  }
  register() {
    this.router.navigate([this.localize.translateRoute('/register')])
  }
  login() {
    this.router.navigate([this.localize.translateRoute('/login')])
  }
  gmail(){
    location.href='https://gmail.com';
  }
  git(){
    location.href='https://github.com/MSM303';
  }
}

