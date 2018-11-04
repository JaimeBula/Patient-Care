import { Component, OnInit } from "@angular/core";
import { BackendServiceService } from "../backend-service.service";
import { Doctor } from "../patient";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-addnewpatient",
  templateUrl: "./addnewpatient.component.html",
  styleUrls: ["./addnewpatient.component.css"]
})
export class AddnewpatientComponent implements OnInit {
  constructor(private backendService: BackendServiceService,   private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.initializeForm();

    this.route.params.subscribe(params => 
      
      {
      console.log(params);
      var patientID = params["patientID"];


      });
  }

  doctors: Doctor[];

  initializeForm() {
    this.backendService.getAllDoctors().then((data: Doctor[]) => {
      this.doctors = data;
    });
  }
}
