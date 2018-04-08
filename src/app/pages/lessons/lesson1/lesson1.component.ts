import { Component, OnInit, Output } from '@angular/core';
import {Tdata} from '../tdata';
import {ToCamelPipe} from '../to-camel.pipe';

@Component({
  selector: 'lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss']
})
export class Lesson1Component implements OnInit {

  data : Tdata;

  colors : string[] = ['red','green','blue'];

  constructor() { }

  ngOnInit() {
    this.data = {title:'learning',color:'yellow'};
  }

  send(){
    console.log('lesson1','send finished');
  }
}
