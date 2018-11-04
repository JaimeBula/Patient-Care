import { Component, OnInit, ViewChild } from "@angular/core";
import { BackendServiceService } from "../backend-service.service";
import { Patient, PatientView } from "../patient";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-listpatients",
  templateUrl: "./listpatients.component.html",
  styleUrls: ["./listpatients.component.css"]
})
export class ListpatientsComponent implements OnInit {
  constructor(private backendService: BackendServiceService) {}

  @ViewChild(MatPaginator)
  @ViewChild(MatSort)
  sort: MatSort;

  dataSource = new MatTableDataSource<Patient>();
  displayedColumns = [
    "lastName",
    "firstName",
    "registeredDate",
    "doctorName",
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

  selectRow(row: Patient) {
    console.log(row);
  }
}
