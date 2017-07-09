import {Component , Input, Output ,OnInit, OnDestroy , EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'address-cadaster-form',
  templateUrl: './addressCadasterForm.html',
  styleUrls: ['./addressCadasterForm.scss']
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
                  hhZipCode :[''],
                  hhAddress : [],
                  landmark : []
                }),
                  status: this.formBuilder.group({
                    status: ['', Validators.required],
                    pubName: ['', Validators.required],
                  }),
                hhNotes:['']
              });
  }

    isErrorVisible(form:string , field:string, error:string) {
      let localForm:FormGroup ;
      if(form)
        localForm = this.addForm.controls[form] as FormGroup;
      else
        localForm = this.addForm; 

      return localForm.controls[field].dirty
              && localForm.controls[field].errors &&
              localForm.controls[field].errors[error];

    }


  get valid() {
      return this.addForm.valid;
  }

  addedNewGroup(event){
      this.groupsList.push(event);
  }

  onChangeSelectedValue(event){
      this.addForm.controls['group'].setValue(event);
  }

  addTerritory(){
      if(this.valid)
        this.onAddAddress.emit(this.addForm);

  }

}
