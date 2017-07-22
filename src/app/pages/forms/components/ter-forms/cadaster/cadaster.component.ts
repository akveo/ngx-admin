import {Component} from '@angular/core';
import { TerritoriesService } from "app/shared/services/territories.service";
import { TerritoryTypeEnum } from "app/shared/models/territory";


@Component({
  selector: 'cadaster',
  templateUrl: './cadaster.html',
})
export class CadasterComponent{

  constructor(private territoryService:TerritoriesService) {
  }

  addNewIndication(event){
    this.territoryService.createTerritory(event.value , TerritoryTypeEnum.CONFIRMED).subscribe((address) => {console.log(address)});
  }
}
