import { Pipe, type PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'DateTime',
  standalone: true,
})
export class DatetimePipe implements PipeTransform {
  transform(value: DateTime | string, ...args: unknown[]): unknown {
    if (typeof value === 'string') {
      value = DateTime.fromISO(value);
    }
    return value.toLocaleString(DateTime.DATE_SHORT);
  }
}
