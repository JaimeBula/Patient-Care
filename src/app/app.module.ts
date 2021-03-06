import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { ShellComponent } from "./shell/shell.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AddnewpatientComponent } from "./addnewpatient/addnewpatient.component";
import { ListpatientsComponent } from "./listpatients/listpatients.component";
import { SidemenuComponent } from "./sidemenu/sidemenu.component";
import { ShowpatientComponent } from "./showpatient/showpatient.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HttpClientModule } from "@angular/common/http";
import "hammerjs";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import {
  MatInputModule,
  MatIconModule,
  MatSortModule,
  MatButtonModule,
  MatSelectModule,
  MatDividerModule,
  MatBottomSheetConfig,
  MatBottomSheetModule,
  MatRippleModule
} from "@angular/material";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { FormsModule } from "@angular/forms";
import { ToastsystemComponent } from "./toastsystem/toastsystem.component";
import { ChartsModule } from "ng2-charts/ng2-charts";
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { MainschedulerComponent } from "./mainscheduler/mainscheduler.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShellComponent,
    AddnewpatientComponent,
    ListpatientsComponent,
    SidemenuComponent,
    ShowpatientComponent,
    HeaderComponent,
    FooterComponent,
    ToastsystemComponent,
    MainschedulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatButtonModule,
    MatSelectModule,
    GooglePlaceModule,
    BrowserModule,
    MatDividerModule,
    FormsModule,
    MatBottomSheetModule,
    MatRippleModule,
    ChartsModule,
    SchedulerModule
  ],
  providers: [MatBottomSheetConfig, { provide: LOCALE_ID, useValue: "en" }],
  bootstrap: [AppComponent],
  entryComponents: [ToastsystemComponent]
})
export class AppModule {}
