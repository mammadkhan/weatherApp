import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windSpeed',
})
export class WindSpeedPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} km/s`;
  }
}
