import { Pipe, PipeTransform } from '@angular/core';

const weatherType: {
  [key: number]: string;
} = {
  0: 'Buludsuz',
  1: 'Əsasən buludsuz',
  2: 'Qismən buludlu',
  3: 'Buludlu',
  45: 'Dumanlı',
  48: 'Kəskin dumanlı',
  51: 'Çiskinli',
  53: 'Mülayim çiskinli',
  55: 'İntensiv çiskinli',
  56: 'Dondurucu çiskin',
  57: ' İntensiv dondurucu çiskin',
  61: 'Yağış',
  63: 'Mülayim yağış',
  65: ' İntensiv yağış',
  66: 'Dondurucu yağış',
  67: ' İntensiv dondurucu yağış',
  71: 'Qarli',
  73: 'Mülayim qarlı',
  75: 'İntensiv qarlı',
  77: 'Ara-bir qar',
  80: 'Az yağışlı',
  81: 'Yağıntılı, yağış',
  82: 'Leysan',
  85: 'Qar leysanı',
  86: 'Şiddətli qar leysanı',
  95: 'Tufan',
  96: 'Dolu və tufan',
  99: 'İntensiv dolu və tufan',
  100: 'no data',
};

@Pipe({
  name: 'weatherCode',
})
export class WeatherCodePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    return weatherType[value];
  }
}
