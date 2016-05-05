import {Pipe, PipeTransform} from 'angular2/core';
import {layoutPaths} from '../../../theme';

@Pipe({name: 'appPicture'})
export class AppPicturePipe implements PipeTransform {

  transform(input:string, args:any[]):string {
    return layoutPaths.images.root + input;
  }
}
