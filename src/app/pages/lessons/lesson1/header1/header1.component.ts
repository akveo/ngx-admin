import { Component, OnInit, Input } from '@angular/core';
import {Tdata} from '../../tdata';

@Component({
  selector: 'header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component implements OnInit {
  @Input() data: Tdata;

  constructor() { }

  ngOnInit() {
  }

  changeColor() {
    console.log('header1',this);
  }
}
