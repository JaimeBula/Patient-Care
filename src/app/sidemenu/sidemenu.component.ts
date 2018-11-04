import { Component, OnInit, Inject } from "@angular/core";
import { ShellComponent } from "../shell/shell.component";

@Component({
  selector: "app-sidemenu",
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.css"]
})
export class SidemenuComponent implements OnInit {
  constructor(@Inject(ShellComponent) private shell: ShellComponent) {}

  ngOnInit() {}

  toggle() {
    if (window.innerWidth < 600) {
      this.shell.toggle();
    }
  }
}
