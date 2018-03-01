import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

@Injectable()
export class UtilidadesService {

    static userArray: any[];
    static jsonArray: any[];

    constructor() {
    }

    static getSumArray(array): any {
        let sum = 0;
        array.forEach(element => {
            sum += element;
        });
        return sum;
    }

}
