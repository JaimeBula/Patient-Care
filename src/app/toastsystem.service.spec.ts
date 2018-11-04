import { TestBed } from '@angular/core/testing';

import { ToastsystemService } from './toastsystem.service';

describe('ToastsystemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastsystemService = TestBed.get(ToastsystemService);
    expect(service).toBeTruthy();
  });
});
