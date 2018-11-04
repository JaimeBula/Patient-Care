import { TestBed } from "@angular/core/testing";

import { BackendServiceService } from "./backend-service.service";
import { PatientView } from "./patient";
import { HttpClientModule } from "@angular/common/http";


import { RouterTestingModule } from "@angular/router/testing";
import { MatBottomSheetModule, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatSelectModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatIconModule, MatBottomSheet } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { ToastsystemComponent } from "./toastsystem/toastsystem.component";

describe("BackendServiceService", () => {
  beforeEach(() => TestBed.configureTestingModule({
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
      { provide: MatBottomSheetRef, useValue: {} },
      { provide: MatBottomSheet, useValue: {} },
      { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
      
    ],
    declarations: [ ToastsystemComponent ]
  }));

  it("should be created", () => {
    const service: BackendServiceService = TestBed.get(BackendServiceService);
    expect(service).toBeTruthy();
  });

  it('#getPatientView should return results',
  (done: DoneFn) => {
    const service: BackendServiceService = TestBed.get(BackendServiceService);
  service.getPatientView().then((value: PatientView[]) => {

    expect(value.length > 0).toBe(true);
    done();
  });
});

});
