import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: any): any {
    setInterval(function () {
      
    }, 1000);

    let currentDate: Date = new Date();

    let currentDateTime: any = new Date(currentDate.getTime());

    var seconds = Math.floor(Math.abs(currentDateTime - value) * 0.001),
      minutes = Math.floor(seconds / 60),
      hours = Math.floor(seconds / 3600),
      months = Math.floor(seconds / 2600640),
      days = Math.floor(seconds / 86400),
      years = Math.floor(seconds / 31104000);
    let plural: string = '';

    if (seconds <= 60) {
      if (seconds == 0) {
        return 'posted now';
      } else {
        if (seconds > 1) {
          plural = 's';
        }
        return seconds + ' second' + plural + 'ago';
      }
    } else if (minutes <= 60) {
      if (minutes > 1) {
        plural = 's';
      }
      return minutes + ' minute' + plural + ' ago';
    } else if (hours <= 24) {
      if (hours > 1) {
        plural = 's';
      }
      return hours + ' hour' + plural + ' ago';
    } else if (days <= 30) {
      if (days > 1) {
        plural = 's';
      }
      return days + ' day' + plural + ' ago';
    } else if (months <= 12 && months > 0) {
      if (months > 1) {
        plural = 's';
      }
      return months + ' month' + plural + ' ago)';
    } else {
      if (years > 1) {
        plural = 's';
      }
      return years + ' year' + plural + ' ago';
    }
  }
}
