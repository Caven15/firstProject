import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degToFahr'
})
export class DegToFahrPipe implements PipeTransform {

  transform(value: number): number {
    return (value * 9/5) + 32;
  }

}
