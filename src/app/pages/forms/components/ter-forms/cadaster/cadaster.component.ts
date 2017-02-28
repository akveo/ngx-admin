import {Component} from '@angular/core';
import {CadasterService} from './cadaster.service';

@Component({
  selector: 'cadaster',
  templateUrl: './cadaster.html',
})
export class CadasterComponent{

  constructor(private cadasterService:CadasterService) {
  }

addNewIndication(event){
  this.cadasterService.addNewTerritory(event.value);
}
}
