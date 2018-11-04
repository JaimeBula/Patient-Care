import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsystemComponent, ToastSystemConfig, ToastType } from './toastsystem.component';

import { HttpClientModule } from "@angular/common/http";

import { RouterTestingModule } from "@angular/router/testing";
import { MatBottomSheetModule, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatSelectModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatIconModule, MatBottomSheetConfig } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';

describe('ToastsystemComponent', () => {
  let component: ToastsystemComponent;
  let fixture: ComponentFixture<ToastsystemComponent>;


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
        MatSidenavModule,
        MatIconModule
      
      ],
      providers: [
        { provide: MatBottomSheetRef, useValue: {   } },
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
      ],
      declarations: [ ToastsystemComponent]
    })
    .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(ToastsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the text message for header', () => {
    expect(component.headerText == "Message").toBeTruthy();
  });

  it('should display generic message', () => {
    expect(component.toastConfig.message === "Generic Message").toBeTruthy();
  });
});
