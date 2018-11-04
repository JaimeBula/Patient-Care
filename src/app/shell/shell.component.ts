import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { BackendServiceService } from "../backend-service.service";
import { MatSidenav } from "@angular/material";

@Component({
  selector: "app-shell",
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.css"]
})
export class ShellComponent implements OnInit {
  constructor(private backendService: BackendServiceService) {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (window.innerWidth < 600) {
      this.nav.close();
    } else {
      this.nav.open();
    }
  }

  @ViewChild("snav")
  nav: MatSidenav;

  ngOnInit() {
    if (window.innerWidth < 600) {
      this.nav.close();
    }

    this.backendService.initializeMemoryStorage();
  }

  toggle() {
    this.nav.toggle();
  }
}
