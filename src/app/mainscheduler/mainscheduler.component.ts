import { Component, OnInit, HostListener } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { sampleData, displayDate } from '../events-utc';

@Component({
  selector: 'app-mainscheduler',
  templateUrl: './mainscheduler.component.html',
  styleUrls: ['./mainscheduler.component.css']
})
export class MainschedulerComponent implements OnInit {

  public selectedDate: Date = displayDate;
    public startTime = '07:00';
    public events: SchedulerEvent[] = sampleData;

  constructor() {
   
  }

  ngOnInit() {
  }

 

}
