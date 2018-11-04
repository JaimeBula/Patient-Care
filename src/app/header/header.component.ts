import { Component, OnInit, Inject } from '@angular/core';
import { ShellComponent } from '../shell/shell.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(ShellComponent) private shell: ShellComponent) { }

  ngOnInit() {
  }

  toggle(){
    this.shell.toggle();
  }
}
