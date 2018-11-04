import { Component, OnInit } from "@angular/core";
import { BackendServiceService } from "../backend-service.service";
import { Doctor, Patient } from "../patient";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastsystemService } from "../toastsystem.service";
import { ToastType } from "../toastsystem/toastsystem.component";

@Component({
  selector: "app-addnewpatient",
  templateUrl: "./addnewpatient.component.html",
  styleUrls: ["./addnewpatient.component.css"]
})
export class AddnewpatientComponent implements OnInit {
  constructor(
    private backendService: BackendServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastsystemService
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
    this.patient = new Patient();
    this.patient.id = 0;
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

  save() {
    this.toast.ShowToastMessage(ToastType.Information, "Toast Message Test");
  }
}
