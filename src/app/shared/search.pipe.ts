import { Pipe, PipeTransform } from '@angular/core';

import { Animal } from './interfaces';

@Pipe({
  name: 'searchAnimal'
})

export class SearchPipe implements PipeTransform {
  transform(animals: Animal[], { searchStr = '', type = '', gender = '' }): Animal[] {
    if (!animals) {
      return [];
    }

    return animals
      .filter(animal => {
        if (!searchStr.trim()) {
          return true;
        }
        const searchValue = searchStr.toLocaleLowerCase();
        return animal.name.toLocaleLowerCase().includes(searchValue) || animal.breed.toLocaleLowerCase().includes(searchValue);
      })
      .filter(animal => {
        if (!type) {
          return true;
        }
        return animal.type === type;
      })
      .filter(animal => {
        if (!gender) {
          return true;
        }
        return animal.gender === gender;
      });
  }
}
