import { Pipe, PipeTransform } from '@angular/core';

// aydin "../../../assets/icons/sun.svg"
// qismen buludlu "../../../assets/icons/cloudy.svg"
// buludlu "../../../assets/icons/cloud.svg"
// yagis "../../../assets/icons/rain.svg"
// kulek "../../../assets/icons/wind.svg"
// qar // rain "../../../assets/icons/snow.svg"

const icons: {
  [key: number]: string;
} = {
  0: '../../../assets/icons/sun.svg',
  1: '../../../assets/icons/sun.svg',
  2: '../../../assets/icons/cloudy.svg',
  3: '../../../assets/icons/cloud.svg',
  45: '../../../assets/icons/fog.svg',
  48: '../../../assets/icons/fog.svg',
  51: '../../../assets/icons/drizzle.svg',
  53: '../../../assets/icons/drizzle.svg',
  55: '../../../assets/icons/drizzle.svg',
  56: '../../../assets/icons/drizzle.svg',
  57: '../../../assets/icons/drizzle.svg',
  61: '../../../assets/icons/rain.svg',
  63: '../../../assets/icons/rain.svg',
  65: '../../../assets/icons/rain.svg',
  66: '../../../assets/icons/rain.svg',
  67: '../../../assets/icons/rain.svg',
  71: '../../../assets/icons/snow.svg',
  73: '../../../assets/icons/snow.svg',
  75: '../../../assets/icons/snow.svg',
  77: '../../../assets/icons/snow.svg',
  80: '../../../assets/icons/drizzle.svg',
  81: '../../../assets/icons/rain.svg',
  82: '../../../assets/icons/rain.svg',
  85: '../../../assets/icons/snow.svg',
  86: '../../../assets/icons/snow.svg',
  95: '../../../assets/icons/thunder.svg',
  96: '../../../assets/icons/thunder.svg',
  99: '../../../assets/icons/thunder.svg',
  100: '../../../assets/icons/loading.svg',
};

@Pipe({
  name: 'icons',
})
export class IconsPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return icons[value];
  }
}
