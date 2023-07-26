import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <section class="content font-sans">
        <router-outlet></router-outlet>
      </section>
      <app-footer></app-footer>
    </main>
  `,
})
export class AppComponent {
  title = 'portfolio';
}
