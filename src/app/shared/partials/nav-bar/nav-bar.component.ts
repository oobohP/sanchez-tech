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
    if (event.path[1].scrollY > 40) {
      this.scrolledState = 'notmoved';
    } else if (event.path[1].scrollY === 0) {
      this.scrolledState = 'moved';
    }
  }

  ngOnInit() {
    this.scrolledState = 'moved';
  }
}
