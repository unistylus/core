import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[] = [], search = ''): string[] {
    return !search ? value : value.filter(item => item.indexOf(search) !== -1);
  }

}
