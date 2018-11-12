import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ngxRound' })
export class RoundPipe implements PipeTransform {

  transform(input: number): number {
    return Math.round(input);
  }
}
