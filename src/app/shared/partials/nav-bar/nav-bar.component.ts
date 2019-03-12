import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  scrolledState: string;
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (event.path[1].scrollY > 80) {
      this.scrolledState = 'notmoved';
    } else if (event.path[1].scrollY === 0) {
      this.scrolledState = 'moved';
    }
    console.log(this.scrolledState);
  }

  constructor() { }

  ngOnInit() {
    this.scrolledState = 'moved';
  }
}
