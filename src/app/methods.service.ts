import { Injectable } from '@angular/core';
import { MenstrualCycleInfo } from './app-interface'; // Fixed typo: 'app-intereface' to 'app-interface'

@Injectable({
  providedIn: 'root'
})
export class MethodsService { 

  constructor() { }

  // Define the method inside the class
  calculateMenstrualCycle(startDate: string, menstruationDays: number,cyclel:number): MenstrualCycleInfo {
    // Convert the input date to a Date object
    const lastPeriodDate = new Date(startDate);
    
    // Assuming a regular cycle of 28 days
    const cycleLength = cyclel;
    
    // Ovulation is approximately 14 days before the next period
    const ovulationDay = cycleLength - 14;
    
    // Calculate the next period start date
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(lastPeriodDate.getDate() + cycleLength);
    
    // Calculate the start of the fertile window
    const fertileWindowStart = new Date(lastPeriodDate);
    fertileWindowStart.setDate(lastPeriodDate.getDate() + ovulationDay - 5);
    
    // Calculate the end of the fertile window
    const fertileWindowEnd = new Date(lastPeriodDate);
    fertileWindowEnd.setDate(lastPeriodDate.getDate() + ovulationDay + 1);
    
    // Calculate the safe days before the fertile window
    const safeDaysBefore = new Date(fertileWindowStart);
    safeDaysBefore.setDate(fertileWindowStart.getDate() - menstruationDays);
    
    // Calculate the safe days after the fertile window
    const safeDaysAfter = new Date(fertileWindowEnd);
    
    // Return the calculated dates as strings
    return {
      nextPeriod: nextPeriodDate.toDateString(),
      ovulationStart: fertileWindowStart.toDateString(),
      ovulationEnd: fertileWindowEnd.toDateString(),
      safeDaysBefore: safeDaysBefore.toDateString(),
      safeDaysAfter: safeDaysAfter.toDateString()
    };
  }
}
