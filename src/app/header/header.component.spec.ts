import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderComponent } from "./header.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from "@angular/router/testing";
import {
  MatBottomSheetModule,
  MatSelectModule,
  MatInputModule,
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
  MatIconModule,
  MatSidenav,
  MatSidenavModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShellComponent } from "../shell/shell.component";
import { SidemenuComponent } from "../sidemenu/sidemenu.component";
import { FooterComponent } from "../footer/footer.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
        MatIconModule,
        MatSidenavModule
      ],
      providers: [
        { provide: MatBottomSheetRef, useValue: {} },
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} }, 
        ShellComponent
      ],
      declarations: [
        HeaderComponent,
        ShellComponent,
        SidemenuComponent,
        FooterComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
