import { Component, OnInit } from "@angular/core";
import { BackendServiceService } from "../backend-service.service";
import { Doctor, Patient } from "../patient";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private backendService: BackendServiceService) {
    this.doughnutChartData = new Array<number>();
  }

  ngOnInit() {
    this.createDoctorChart();
    this.createPatientCounter();
  }

  public doughnutChartLabels: string[];
  public doughnutChartData: number[];
  public doughnutChartType: string = "doughnut";
  public totalPatients: number;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [
    "2013",
    "2014",
    "2015",
    "2017",
    "2016",
    "2017",
    "2018"
  ];
  public barChartType: string = "bar";
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Total Visits" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Pending Visits" }
  ];

  createDoctorChart() {
    this.backendService.getAllDoctors().then((doctors: Doctor[]) => {
      console.log(doctors);
      this.doughnutChartLabels = doctors
        .map(d => d.title)
        .filter((value, index, self) => self.indexOf(value) === index);

      this.doughnutChartLabels.forEach(element => {
        var totalDoctors = doctors.filter(u => u.title == element).length;
        this.doughnutChartData.push(totalDoctors);
      });
    });
  }

  createPatientCounter() {
    this.backendService.getAllPatients().then((patients: Patient[]) => {
      this.totalPatients = patients.length;
    });
  }
}
