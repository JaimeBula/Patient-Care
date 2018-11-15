import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { BackendServiceService } from "../backend-service.service";
import { MatSidenav } from "@angular/material";

@ViewChild("snav")

@Component({
  selector: "app-shell",
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.css"]
})
export class ShellComponent implements OnInit {

  nav: MatSidenav;
  constructor(private backendService: BackendServiceService) {}

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (window.innerWidth < 600) {
      this.nav.close();
    } else {
      this.nav.open();
    }
  }

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
