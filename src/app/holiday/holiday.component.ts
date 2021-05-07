import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

import { Holiday } from './holiday.model';

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {
  public holidayOptions: Holiday[] = [
    {
      city: 'Athens',
      temperature: this.getTemperature()
    },
    {
      city: 'Rome',
      temperature: this.getTemperature()
    },
    {
      city: 'Barcelona',
      temperature: this.getTemperature()
    },
    {
      city: 'Porto',
      temperature: this.getTemperature()
    },
    {
      city: 'Zagreb',
      temperature: this.getTemperature()
    }
  ];

  constructor() { }

  public ngOnInit(): void {
    setInterval(() => {
      this.updateTemperature();
    }, 5000);
  }

  public getBestHolidayOption(): string {
    const bestHolidayOption = this.holidayOptions.reduce((previousValue, currentValue) => {
      return (previousValue.temperature > currentValue.temperature) ? previousValue : currentValue
    });

    return bestHolidayOption.city;
  }

  private getTemperature(): number {
    return _.random(0, 25);
  }

  private updateTemperature(): void {
    for (let i = 0; i < this.holidayOptions.length; i++) {
      this.holidayOptions[i].temperature = this.getTemperature();
    }
  }
}
