import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'custom',
})
export class CustomPipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();  // Convert the input string to uppercase
  }
}
