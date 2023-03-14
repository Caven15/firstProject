import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahrToDeg'
})
export class FahrToDegPipe implements PipeTransform {

  transform(value: number): number {
    return (value - 32) * 5/9;
  }
}
