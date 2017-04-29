import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-editors',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class NgxEditorsComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
