import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewpatientComponent } from './addnewpatient.component';

describe('AddnewpatientComponent', () => {
  let component: AddnewpatientComponent;
  let fixture: ComponentFixture<AddnewpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
