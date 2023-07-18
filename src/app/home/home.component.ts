import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-navigation></app-navigation>
    <app-about></app-about>
    <app-projects></app-projects>
  `,
})
export class HomeComponent {}
