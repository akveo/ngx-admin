import {Component , Input, Output ,OnInit, OnDestroy , EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'address-cadaster-form',
  templateUrl: './addressCadasterForm.html',
  styleUrls: ['./inlineForm.scss']
})
export class AddressCadasterForm implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

@Input()
allowInformGroup:boolean;
addForm: FormGroup;
groupsList:string[] = ["bras","itauera","savoy","tatuape"];
@Output()
protected onAddAddress: EventEmitter<any> = new EventEmitter<any>();

ngOnInit()  {
    this.formInitialBind();
}

formInitialBind():void{
  this.addForm = this.formBuilder.group({
              group: [''],
              publisher: this.formBuilder.group({
                pubName: ['', Validators.required],
              }),
              houseHolder: this.formBuilder.group({
                hhName: ['', Validators.required],
                hhGender:['male',Validators.required],
                hhNationality : ['nigerien',Validators.required],
                hhPhone : [''],
                address :  this.formBuilder.group({
                    hhZipCode :[''],
                    hhAddress : [],
                    landmark : []
                })
              }),
                status: this.formBuilder.group({
                  status: ['', Validators.required],
                  pubName: ['', Validators.required],
                }),
              hhNotes:['']
            });
}

addedNewGroup(event){
    this.groupsList.push(event);
}

onChangeSelectedValue(event){
    console.log("Event recovered" +  event);
    this.addForm.controls['group'].setValue(event);
}

addTerritory(){
      this.onAddAddress.emit(this.addForm);
      console.log(this.addForm.value);
}

}
