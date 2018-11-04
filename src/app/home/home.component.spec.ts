import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HomeComponent } from "./home.component";
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
import { ListpatientsComponent } from "../listpatients/listpatients.component";
import { AddnewpatientComponent } from "../addnewpatient/addnewpatient.component";
import { ChartsModule } from "ng2-charts";

describe("HomeComponent", () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
        MatTableModule,
        ChartsModule
      ],
      declarations: [
        HomeComponent,
        ShellComponent,
        ListpatientsComponent,
        AddnewpatientComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
