

export enum TerritoryTypeEnum {
        CONFIRMED = <any>"territoriesConfirmed" ,
        TBC = <any>"territoriesTbc"    
}

export enum TerritoryFieldMasksEnum {
        CELLPHONE = <any>['(', /\d/, /\d/, ')', ' ',/\d/,' ',/\d/,/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] ,
        ZIP = <any>[/\d/,/\d/,/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/] ,
        ADRESSLINE = <any>['(', /\d/, /\d/, ')', ' ',/\d/,' ',/\d/,/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] ,

}

export class Territory{
 
    constructor(){

    }

     }
