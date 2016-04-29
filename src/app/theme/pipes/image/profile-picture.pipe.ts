import {Pipe, PipeTransform} from 'angular2/core';
import {layoutPaths} from '../../theme.constants';

@Pipe({name: 'profilePicture'})
export class ProfilePicturePipe implements PipeTransform {

  transform(input:string, args:string[]):string {
    let ext = args[0] || 'png';
    return layoutPaths.images.profile + input + '.' + ext;
  }
}
