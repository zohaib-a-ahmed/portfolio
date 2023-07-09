import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <main>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'portfolio';
}
