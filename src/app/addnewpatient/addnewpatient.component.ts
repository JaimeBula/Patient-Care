import { Component, OnInit } from "@angular/core";
import { BackendServiceService } from "../backend-service.service";
import { Doctor, Patient } from "../patient";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-addnewpatient",
  templateUrl: "./addnewpatient.component.html",
  styleUrls: ["./addnewpatient.component.css"]
})
export class AddnewpatientComponent implements OnInit {
  constructor(
    private backendService: BackendServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initializeForm();

    this.route.params.subscribe(params => {
      console.log(params);
      var patientID = params["patientID"];
      if (patientID != null) {
        this.loadPatient(patientID);
      }
    });
  }

  doctors: Doctor[];
  patient: Patient;

  initializeForm() {
    this.backendService.getAllDoctors().then((data: Doctor[]) => {
      this.doctors = data;
    });
  }

  loadPatient(patientId: number) {
    this.backendService.getPatient(patientId).then((data: Patient) => {
      console.log(data);
      this.patient = data;
    });
  }
}
