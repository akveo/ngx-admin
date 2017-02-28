import {Component} from '@angular/core';
import {IndicationService} from './indication.service';

@Component({
  selector: 'indication',
  templateUrl: './indication.html',
})
export class IndicationComponent{

  constructor(private indicationService:IndicationService) {
  }

addNewIndication(event){
  this.indicationService.addNewIndication(event.value);
}
}
