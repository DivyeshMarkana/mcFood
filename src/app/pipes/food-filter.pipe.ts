import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../models/food';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(value: Food[], searchTerm: string): any {

    const result: Food[] = value.filter( (search) => {
      return search.title.toLowerCase().includes(searchTerm.toLowerCase())
    } )

    if (!value || searchTerm === '') {
      return value 
    } else {
      return result
    }
    
  }

}
