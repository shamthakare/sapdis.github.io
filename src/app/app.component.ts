import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showButton = false;
  title = 'counsultingApp';


  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show the button when the user scrolls down
    this.showButton = window.pageYOffset > 100;
  }

  scrollToTop() {
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
