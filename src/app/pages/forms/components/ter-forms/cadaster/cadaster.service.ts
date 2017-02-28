import {Injectable} from '@angular/core';

@Injectable()
export class CadasterService {

  constructor() {
  }

territoriesList:any[] = [];



addNewTerritory(territory){
  this.territoriesList.push(territory);
  console.log(this.territoriesList);
}

getTerritories(){
  return this.territoriesList;
}

}
