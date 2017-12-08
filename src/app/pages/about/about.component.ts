import { Component, OnInit } from '@angular/core';

// Component about
@Component({
  selector: 'ngx-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  objeto: any;

  constructor() {
    this.objeto = {};
  }
}
