import {Component , Input , Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'selector-with-add',
  templateUrl: './selector.html',
  styleUrls: ['./modals.scss']
})
export class SelectorWithAdd {

  constructor() {
  }

@Input()
sugestionList:string[];
@Output()
addedNewValues: EventEmitter<string> = new EventEmitter<string>();

handleNewValues(event){
    this.addedNewValues.emit(event.value);
}

}
