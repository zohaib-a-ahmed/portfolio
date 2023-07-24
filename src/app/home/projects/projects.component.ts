import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

interface Project {
  image: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  isSmallScreen = false;
  isMediumScreen = false;

  projects: Project[] = [
    {
      image: 'assets/projects/atlas.png',
      title: 'Atlas',
      subtitle: 'AI Fitness Trainer',
    },
    {
      image: 'assets/projects/slackchat.jpeg',
      title: 'Billiken Bot',
      subtitle: 'SLU Slackbot Assistant',
    },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });

    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.TabletLandscape])
      .subscribe((result) => {
        this.isMediumScreen = result.matches;
      });
  }
}
