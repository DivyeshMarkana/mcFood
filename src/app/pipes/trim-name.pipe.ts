import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimName'
})
export class TrimNamePipe implements PipeTransform {

  transform(value: string) {
    if (value.length < 20) {
      return value
    } else {
      return value.split('').splice(0, 20).join('').trim() + '...';
    }
  }

}
