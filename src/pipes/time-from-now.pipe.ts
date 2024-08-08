import { Pipe, type PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'TimeFromNow',
  standalone: true,
})
export class TimeFromNowPipe implements PipeTransform {
  transform(dateValue: DateTime | string, invalidString: string = "Invalid DateTime"): unknown {
    if (typeof dateValue === 'string') {
      dateValue = DateTime.fromISO(dateValue);
    }
    if (dateValue.invalidReason !== null) {
      return invalidString;
    }
    var now = DateTime.now();
    var diff = now.diff(dateValue, ['years', 'months', 'days']);
    if (diff.years === 0 && diff.months === 0 && diff.days === 0) {
      return 'today';
    }
    var yearsStr = diff.years === 1 ? 'year' : 'years';
    var monthsStr = diff.months === 1 ? 'month' : 'months';
    var daysStr = diff.days === 1 ? 'day' : 'days';
    diff = diff.normalize();
    if (diff.years === 0 && diff.months === 0) {
      return diff.toFormat(`d '${daysStr}'`);
    }
    if (diff.years === 0) {
      return diff.toFormat(`M '${monthsStr}'`);
    }
    if (diff.months === 0) {
      return diff.toFormat(`y '${yearsStr}'`);
    }

    return diff.toFormat(`y '${yearsStr}' M '${monthsStr}'`);
  }
}
