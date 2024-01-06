import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'personal-portfolio';

  // Reference to the mat-sidenav element
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  // Method to close the sidebar
  closeSidebar() {
    // Close the sidebar
    this.sidenav.close();
  }

}
