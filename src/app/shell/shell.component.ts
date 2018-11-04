import { Component, OnInit, ViewChild } from "@angular/core";
import { BackendServiceService } from "../backend-service.service";
import { MatSidenav } from "@angular/material";

@Component({
  selector: "app-shell",
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.css"]
})
export class ShellComponent implements OnInit {
  constructor(private backendService: BackendServiceService) {}

  @ViewChild("snav")
  nav: MatSidenav;

  ngOnInit() {
    this.backendService.initializeMemoryStorage();
  }

  toggle() {
    this.nav.toggle();
  }
}
