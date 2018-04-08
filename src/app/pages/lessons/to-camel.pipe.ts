import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCamel'
})
export class ToCamelPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('toCamel',value);
    return String(value).replace(/-([a-z])?/g, (match,$0='')=>{
      console.log('toCamel',$0);
      return $0.toUpperCase()});
  }

}
