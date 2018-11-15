import { Component, OnInit, ViewChild } from "@angular/core";
import { BackendServiceService } from "../backend-service.service";
import { Patient, PatientView } from "../patient";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-listpatients",
  templateUrl: "./listpatients.component.html",
  styleUrls: ["./listpatients.component.css"]
})
export class ListpatientsComponent implements OnInit {
  constructor(
    private backendService: BackendServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @ViewChild(MatPaginator)
  @ViewChild(MatSort)
  sort: MatSort;

  dataSource: MatTableDataSource<PatientView> =  new MatTableDataSource<PatientView>();
  displayedColumns = [
    "lastName",
    "firstName",
    "registeredDate",
    "doctorName",
    "phone",
    "email",
    "street",
    "city",
    "zip",
    "country",
    "view"
  ];

  ngOnInit() {
    this.loadPatients();
  }

  loadPatients() {
    this.backendService.getPatientView().then((data: PatientView[]) => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
    });
  }

  selectRow(patient: Patient) {
    this.router.navigate(["main/newpatient", patient.id]);
  }
}
