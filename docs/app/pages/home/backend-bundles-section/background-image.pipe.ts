import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'backgroundImage' })
export class BackgroundImagePipe implements PipeTransform {
  transform(url: string): any {
    return {
      'background-image': `url(\'${url}\')`,
    };
  }
}
