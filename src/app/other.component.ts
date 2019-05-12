import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  template: `
    <div>
      {{ 'OTHER.title' | translate }}
    </div>
  `,
})
export class OtherComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    
  }

}
