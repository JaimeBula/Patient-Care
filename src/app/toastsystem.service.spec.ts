import { TestBed } from '@angular/core/testing';

import { ToastsystemService } from './toastsystem.service';
import { MatBottomSheet } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';

describe('ToastsystemService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[
      MatBottomSheet, 
      Overlay
    ]
  }));

  it('should be created', () => {
    const service: ToastsystemService = TestBed.get(ToastsystemService);
    expect(service).toBeTruthy();
  });
});
