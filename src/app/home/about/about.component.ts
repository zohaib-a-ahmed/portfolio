import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  isMobileView = false;
  isTabletView = false;
  private breakpointSubscription: Subscription = new Subscription();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointSubscription = this.breakpointObserver
      .observe([
        Breakpoints.Small,
        Breakpoints.HandsetPortrait,
        Breakpoints.TabletPortrait,
      ])
      .subscribe((result) => {
        this.isMobileView =
          result.breakpoints[Breakpoints.Small] ||
          result.breakpoints[Breakpoints.HandsetPortrait];
        this.isTabletView = result.breakpoints[Breakpoints.TabletPortrait];
      });
  }

  ngOnDestroy() {
    this.breakpointSubscription.unsubscribe();
  }
}
