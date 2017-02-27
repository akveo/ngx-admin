import {Component , Input, Output ,OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'address-cadaster-form',
  templateUrl: './addressCadasterForm.html',
  styleUrls: ['./inlineForm.scss']
})
export class AddressCadasterForm implements OnInit {

  constructor() {
  }

@Input()
allowInformGroup:boolean;

addedNewGroup(event){
    console.log("Event recovered" +  event);
}

ngOnInit()  {

}


}
