import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainschedulerComponent } from './mainscheduler.component';

describe('MainschedulerComponent', () => {
  let component: MainschedulerComponent;
  let fixture: ComponentFixture<MainschedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainschedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainschedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
