  import {Component , Input, Output ,OnInit, OnDestroy , EventEmitter} from '@angular/core';
  import { FormGroup, FormBuilder, Validators } from '@angular/forms';
  import { TerritoryFieldMasksEnum } from "app/shared/models/territory";
  const cep = require('cep-promise');


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
  errors = {};
  
  //Masks
  public  phoneMask = TerritoryFieldMasksEnum.CELLPHONE;
  public  zipMask = TerritoryFieldMasksEnum.ZIP;
  

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
                    hhPhone : ['',Validators.required],
                    hhZipCode :['',Validators.required],
                    hhAddress : ['',Validators.required],
                    landmark : ['',Validators.required]
                  }),
                    status: this.formBuilder.group({
                      status: ['tbc', Validators.required],
                      pubName: ['', Validators.required],
                    }),
                  hhNotes:['',Validators.required]
                });
    }

 
    

      isErrorVisible(form:string , field:string, error:string) {
        let localForm:FormGroup ;
        
        if(form)
          localForm = this.addForm.controls[form] as FormGroup;
        else
        localForm  = this.addForm; 
        
        let hasErrors = localForm.controls[field].dirty
                && localForm.controls[field].errors &&
                localForm.controls[field].errors[error]
                  
        return hasErrors;

      }

  
  handleCepInformed(event){
    let zipcode = this.sanitize(event.target.value)
    this.searchZipCode(zipcode).then(address => {
                                console.log(this.addForm);
                                let addressLine = this.buildAddressLine(address);
                                let houseHolderForm = this.addForm.controls['houseHolder'] as FormGroup;
                                houseHolderForm.controls['hhAddress'].setValue(addressLine);
                              });
  }

  searchZipCode(zipCode){
    return  cep(zipCode);
  }

  private buildAddressLine(addressObject):string{
    // {cep: "08275340", state: "SP", city: "São Paulo", neighborhood: "Jardim Nossa Senhora do Carmo", street: "Rua Xavier Palmerim"}
    const addressLine = `${addressObject.street} , ${addressObject.neighborhood} - ${addressObject.city} - ${addressObject.state} `
    return addressLine;
  }

   private updateAddressForm(addressLine){

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

    sanitize(value){
     return value.replace(/[^a-zA-Z 0-9]/g, "");
     
    }

    addTerritory(){
        if(this.valid)
          this.onAddAddress.emit(this.addForm);
        else
          console.log(this.addForm.value )

    }

  }
