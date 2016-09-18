import {Pipe, PipeTransform} from '@angular/core';

/**
 * 转换小数为百分数
 */
@Pipe({name: 'numToPercent'})
export class NumToPercentPipe implements PipeTransform {

  transform(input:string, decimals?:number = 0):string {

    const p:number = Math.pow(10, decimals + 2);
    return (Math.round(input * p) / p * 100).toFixed(decimals) + '%';
  }
}
