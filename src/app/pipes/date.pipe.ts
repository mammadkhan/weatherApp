import { Pipe, PipeTransform } from '@angular/core';

const months: {
  [key: number]: string;
} = {
  1: 'Yanvar',
  2: 'Fevral',
  3: 'Mart',
  4: 'Aprel',
  5: 'May',
  6: 'Iyun',
  7: 'Iyul',
  8: 'Avqust',
  9: 'Sentyabr',
  10: 'Oktyabr',
  11: 'Noyabr',
  12: 'Dekabr',
};

@Pipe({
  name: 'date',
})
export class DatePipe implements PipeTransform {
  transform(value: string, mini: boolean): unknown {
    const dateArr = value.split('T');
    const clearDate = dateArr[0].split('-');
    if (mini) {
      return `${clearDate[2]} ${months[Number(clearDate[1])]} ${clearDate[0]}`;
    }
    return `${clearDate[2]} ${months[Number(clearDate[1])]} <br> ${
      clearDate[0]
    }`;
  }
}
