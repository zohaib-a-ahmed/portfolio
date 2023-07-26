// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Use a separate HTML file for readability (optional)
  styleUrls: ['./app.component.css'], // Add the CSS file we created
})
export class AppComponent {
  title = 'portfolio';
}
