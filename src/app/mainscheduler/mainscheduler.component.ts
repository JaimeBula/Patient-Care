import { Component, OnInit, HostListener } from '@angular/core';
import {Appointment, Service} from '../app.service';

@Component({
  selector: 'app-mainscheduler',
  templateUrl: './mainscheduler.component.html',
  styleUrls: ['./mainscheduler.component.css'],
  providers: [Service]
})
export class MainschedulerComponent implements OnInit {

  appointmentsData: Appointment[];
  currentDate: Date = new Date(2017, 4, 11);

  constructor(service: Service) {
      this.appointmentsData = service.getAppointments();
  }

  ngOnInit() {
  }

 

}
