import { Component, OnInit } from '@angular/core';

// Component is about
@Component({
  selector: 'ngx-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent implements OnInit {
  objeto : any ; 
  constructor() {
    this.objeto = {};
  }
  ngOnInit() {
  }
}
