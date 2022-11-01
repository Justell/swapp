import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: Character[], text: string): Character[] {
    if (text) {
      return value.filter((item) => item.name.toLowerCase().includes(text));
    }
    return value;
  }
}
