import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { MdSidenav } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(
  ) { }

  ngOnInit() {
    if (window.innerWidth < 768) {
      this.sidenav.close();
    }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth < 768) {
            this.sidenav.close();
        }
        if (event.target.innerWidth == 768) {
            this.sidenav.close();
        }
        if (event.target.innerWidth > 768) {
           this.sidenav.open();
        }
    }
}