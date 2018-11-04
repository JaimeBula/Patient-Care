import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";

import { ListpatientsComponent } from "./listpatients.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatSelectModule,
  MatBottomSheetModule,
  MatTableModule
} from "@angular/material";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { Patient } from "../patient";
import { Router } from "@angular/router";
import { routes } from "../app-routing.module";
import { Location } from "@angular/common";
import { ShellComponent } from "../shell/shell.component";
import { HomeComponent } from "../home/home.component";
import { AddnewpatientComponent } from "../addnewpatient/addnewpatient.component";

describe("ListpatientsComponent", () => {
  let component: ListpatientsComponent;
  let fixture: ComponentFixture<ListpatientsComponent>;

  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        MatBottomSheetModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(routes),
        MatTableModule
      ],
      declarations: [
        ListpatientsComponent,
        ShellComponent,
        HomeComponent,
        AddnewpatientComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(ListpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

 
  it("Is loading patiens in the patiens view", fakeAsync (() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    let patient = new Patient();
    patient.id = 1;  
    component.selectRow(patient);
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe("/main/newpatient/1");
  }));
});
