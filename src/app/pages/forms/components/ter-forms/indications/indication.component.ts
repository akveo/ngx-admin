import {Component} from '@angular/core';
import {IndicationService} from './indication.service';
import { TerritoriesService } from "app/shared/services/territories.service";
import { TerritoryTypeEnum } from "app/shared/models/territory";
import { NotificationsService } from "angular2-notifications";

@Component({
  selector: 'indication',
  templateUrl: './indication.html',
})
export class IndicationComponent{

  constructor(private territoryService:TerritoriesService , private _service: NotificationsService) {
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

 

  addNewIndication(event){
    console.log(event);
    this.territoryService.createTerritory(event.value , TerritoryTypeEnum.TBC).subscribe((address) => this.notify());
  }


}
