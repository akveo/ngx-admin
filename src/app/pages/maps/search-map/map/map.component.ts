import { Component, OnInit } from '@angular/core';
import {CalcService} from '../calc.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  constructor(public calc: CalcService) { }

}
