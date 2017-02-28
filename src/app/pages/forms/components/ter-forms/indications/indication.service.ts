import {Injectable} from '@angular/core';

@Injectable()
export class IndicationService {

  constructor() {
  }

territoriesList:any[] = [];



addNewIndication(territory){
  this.territoriesList.push(territory);
  console.log(this.territoriesList);
}

getIndication(){
  return this.territoriesList;
}

}
