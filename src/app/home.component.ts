import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      {{ 'HOME.title' | translate }}
    </div>
  `,
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    
  }

}
