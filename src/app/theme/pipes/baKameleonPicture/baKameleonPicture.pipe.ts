import {Pipe, PipeTransform} from '@angular/core';
import {layoutPaths} from '../../../theme';

@Pipe({name: 'baKameleonPicture'})
export class BaKameleonPicturePipe implements PipeTransform {

  transform(input:string):string {
    return layoutPaths.images.root + 'theme/icon/kameleon/' + input + '.svg';
  }
}
