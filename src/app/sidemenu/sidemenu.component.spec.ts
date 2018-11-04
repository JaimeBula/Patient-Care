import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidemenuComponent } from './sidemenu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShellComponent } from '../shell/shell.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

import { HttpClientModule } from "@angular/common/http";

import { MatBottomSheetModule, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatSelectModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatIconModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';

describe('SidemenuComponent', () => {
  let component: SidemenuComponent;
  let fixture: ComponentFixture<SidemenuComponent>;

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
      declarations: [ SidemenuComponent, ShellComponent, HeaderComponent, , FooterComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 // it('should create', () => {
 //   expect(component).toBeTruthy();
 // });
});
