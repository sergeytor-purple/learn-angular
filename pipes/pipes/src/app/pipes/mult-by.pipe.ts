import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mult',
})
export class MultByPipe implements PipeTransform {
  transform(num: number, pow: number = 1): number{
    return num * pow
  }
}
