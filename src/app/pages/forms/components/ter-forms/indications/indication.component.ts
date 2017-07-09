import {Component} from '@angular/core';
import {IndicationService} from './indication.service';
import { NotificationsService } from "angular2-notifications";

@Component({
  selector: 'indication',
  templateUrl: './indication.html',
})
export class IndicationComponent{

  constructor(private indicationService:IndicationService) {
  constructor(private territoryService:TerritoriesService , private _service: NotificationsService) {
  }

addNewIndication(event){
  this.indicationService.addNewIndication(event.value);
}
  public options = {
      position: ["bottom", "right"],
      timeOut: 50000,
      lastOnBottom: true,
  };
  notify() {
    this._service.success(
        'Territory Successfuly Created',
        'Some Content',
        {
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            maxLength: 10
        }
    )
  } 
}
