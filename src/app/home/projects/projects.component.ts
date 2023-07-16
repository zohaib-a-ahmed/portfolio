import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

interface Project {
  image: string;
  title: string;
  subtitle: string;
  description: string;
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
      image: 'assets/atlas.png',
      title: 'Atlas',
      subtitle: 'A.I. Fitness Trainer',
      description: 'Description of Project 1.',
    },
    {
      image: 'assets/slackchat.jpeg',
      title: 'Billiken Bot',
      subtitle: 'SLU Slackbot Assistant',
      description: 'Description of Project 2.',
    },
    // Add more projects as needed
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small]) // Define the breakpoints you want to observe
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });

    this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.TabletLandscape]) // Define the medium breakpoint
      .subscribe((result) => {
        this.isMediumScreen = result.matches;
      });
  }
}
