import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { Patient } from '../patient';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-listpatients',
  templateUrl: './listpatients.component.html',
  styleUrls: ['./listpatients.component.css']
})
export class ListpatientsComponent implements OnInit {

  constructor(private backendService: BackendServiceService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<Patient>();
  displayedColumns = ['firstName', 'lastName',];

  ngOnInit() {
    this.loadPatients();
  }

  loadPatients(){
    this.backendService.getAllPatients().subscribe(
      (data:Patient[])=>
      {
        this.dataSource.data = data;
      }
    )
  }
}
