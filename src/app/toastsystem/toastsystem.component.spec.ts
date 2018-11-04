import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastsystemComponent } from './toastsystem.component';

describe('ToastsystemComponent', () => {
  let component: ToastsystemComponent;
  let fixture: ComponentFixture<ToastsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastsystemComponent ]
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
});
