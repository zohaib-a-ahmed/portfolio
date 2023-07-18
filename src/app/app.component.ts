import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'portfolio';
}
