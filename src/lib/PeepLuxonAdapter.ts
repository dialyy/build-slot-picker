import DateAdapter from "@mui/lab/AdapterLuxon";
import { DateTime } from 'luxon';


class CustomString extends String {
  charAt(_: number): string {
    return this.valueOf();
  }
}


class PeepLuxonAdapter extends DateAdapter {

  constructor() {
    super();

    
    const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const customWeekDays = weekDays.map((day) => new CustomString(day) as string);

    this.getWeekdays = (): string[] => customWeekDays;


    this.getWeekArray = (date: DateTime) => {

      const startDate = this.startOfWeek(date);
      const endDate = this.endOfWeek(this.addWeeks(date, 1));


      let count = 0;
      let currentDate = startDate;
      const weeks: DateTime[][] = [];
      let lastDay = null;
      
      while (this.isBefore(currentDate, endDate)) {
        let weekNumber = Math.floor(count / 7);
        weeks[weekNumber] = weeks[weekNumber] || [];

        let toDay = currentDate.get('day');

        if (lastDay !== toDay) {
          lastDay = toDay;
          weeks[weekNumber].push(currentDate);
          count += 1;
        }
        currentDate = this.addDays(currentDate, 1);
      }

      return weeks;
    }

    this.getNextMonth = (date: DateTime) => {

      const weekNumber:number = this.getWeekOfMonth(date);

      if( typeof weekNumber === 'undefined')
      {
        return date;
      }

      if (1 <= weekNumber && weekNumber <= 3) {
        return this.addWeeks(date, 2);
      } else {
        return this.addWeeks(date, 1);
      }
    }

    this.getPreviousMonth = (date: DateTime) => {

      const weekNumber:number = this.getWeekOfMonth(date);

      if( typeof weekNumber === 'undefined')
      {
          return date;
      }
      
      if (2 <= weekNumber && weekNumber <= 3) {
        return this.addWeeks(date, -2);
      } else {
        return this.addWeeks(date, -1);
      }
    }

  }


  getWeekOfMonth = (date:DateTime): number => {

    const start = this.startOfWeek(date);
    const weekStartsOn = start.get('day');

    const currentDayOfMonth:number = date.get('day');


    const startWeekDay:number = this.startOfMonth(date).get('day')
    if (isNaN(currentDayOfMonth)) return NaN


    let lastDayOfFirstWeek:number = weekStartsOn - startWeekDay
    if (lastDayOfFirstWeek <= 0) lastDayOfFirstWeek += 7

    const remainingDaysAfterFirstWeek:number = currentDayOfMonth - lastDayOfFirstWeek

    return Math.ceil(remainingDaysAfterFirstWeek / 7) + 1
    
  }

}

export default PeepLuxonAdapter;



