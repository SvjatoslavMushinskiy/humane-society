import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './interfaces';

@Pipe({
  name: 'splice'
})
export class SplicePipe implements PipeTransform {
  transform(arr: Animal[], { pageIndex, pageSize }): Animal[] {

    return [...arr].splice(pageIndex * pageSize, pageSize);
  }
}
