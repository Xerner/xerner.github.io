import { Pipe, type PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'TimeFromNow',
  standalone: true,
})
export class TimeFromNowPipe implements PipeTransform {
  transform(dateValue: DateTime | string, ...args: unknown[]): unknown {
    if (typeof dateValue === 'string') {
      dateValue = DateTime.fromISO(dateValue);
    }
    var now = DateTime.now();
    var diff = now.diff(dateValue, ['years', 'months', 'days']);
    if (diff.years === 0 && diff.months === 0 && diff.days === 0) {
      return 'today';
    }
    if (diff.years === 0 && diff.months === 0 && diff.days !== 0) {
      return diff.toFormat("d 'days'");
    }
    var diffStr = []
    if (diff.years !== 0) {
      if (diff.years === 1) {
        diffStr.push(diff.toFormat("y 'year'"));
      } else {
        diffStr.push(diff.toFormat("y 'years'"));
      }
    }
    if (diff.months !== 0 && diff.years === 0) {
      if (diff.months === 1) {
        diffStr.push(diff.toFormat("M 'month'"));
      } else {
        diffStr.push(diff.toFormat("M 'months'"));
      }
    }
    if (diff.days !== 0 && diff.months === 0) {
      if (diff.days === 1) {
        diffStr.push(diff.toFormat("d 'day'"));
      } else {
        diffStr.push(diff.toFormat("d 'days'"));
      }
    }
    return diffStr.join(' ');
  }
}
