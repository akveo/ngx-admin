import {Pipe, PipeTransform} from '@angular/core';
import {layoutPaths} from '../../../theme';

@Pipe({name: 'kameleonPicture'})
export class KameleonPicturePipe implements PipeTransform {

  transform(input:string):string {
    return layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg';
  }
}
