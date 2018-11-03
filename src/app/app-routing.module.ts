import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes, CanActivate } from "@angular/router";
import { ListpatientsComponent } from './listpatients/listpatients.component';
import { AddnewpatientComponent } from './addnewpatient/addnewpatient.component';

const routes: Routes = [
  {
    path: "",
   // canActivate: [AuthGuard],
    component: ShellComponent,
    children: [{ path: "", component: HomeComponent }]
  },
  {
    path: "main",
    component: ShellComponent,
   // canActivate: [AuthGuard],
    children: [
      { path: "home", component: HomeComponent },
      {path: "listpatients", component: ListpatientsComponent},
      {path: "newpatient", component: AddnewpatientComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
