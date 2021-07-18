import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: any): any {
    // transform(value: any): number {
    //   let today: Date = new Date(); //get current date and time
    //   let todayWithNoTime: any = new Date(
    //     today.getFullYear(),
    //     today.getMonth(),
    //     today.getDate()
    //   );

    //   var dateDifference = Math.abs(value - todayWithNoTime); //return value in miliseconds
    //   const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    //   var dateDifferenceSeconds = dateDifference * 0.001; //Converts miliseconds to senconds
    //   var dateCounter = dateDifferenceSeconds / secondsInDay;

    //   if (dateCounter >= 1 && value > todayWithNoTime) {
    //     return dateCounter;
    //   } else {
    //     return 0;
    //   }
    // }
    let today: Date = new Date();
    let todayWithNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    let startDate: any = new Date(
      value.getFullYear(),
      value.getMonth()-1,
      value.getDate()
    )

    var dateDifference = Math.abs(todayWithNoTime-value);
    
    // var seconds = Math.floor((Date.now()-value) * 0.001)
    // const secondsInDay = 86400;
    // // var seconds = Math.round(dateDifference * 0.001);
    // var seconds = Math.round((today.getTime()-startDate.getTime())*0.001);
    var seconds = dateDifference * 0.001;
    var minutes = Math.round(seconds / 60);
    var hours = Math.round(seconds / 3600);
    var days = Math.round(seconds/(1000*60*60*24));
    var months = Math.round(seconds / 2600640);
    // var dateCounter = seconds / secondsInDay;

    // if (seconds <= 60) {
    //   if (seconds == 0) {
    //     return 'now';
    //   } else {
    //     return seconds + 's ago';
    //   }
    // } else if (minutes <= 60) {
    //   return minutes + 'm ago';
    // } else if (hours> 1 && hours <= 24) {
    //   return hours + 'h ago';
    // } else if(days <= 30){
    //   return days + 'd ago';
    // }
    // else if (months <= 24) {
    // }

  //   function treatAsUTC(date) {
  //     var result = new Date(date);
  //     result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  //     return result;
  // }
    // startDate.setMinutes(startDate.getMinutes()-startDate.getTimezoneOffset());

    return value;
    // return (Math.round((today.getTime()-value.getTime())*0.001)) +'====='+seconds;
  }
}
