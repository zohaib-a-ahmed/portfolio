import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

interface Project {
  image: string;
  title: string;
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
      image: 'assets/me.jpeg',
      title: 'Project 1',
      description: 'Description of Project 1.',
    },
    {
      image: 'assets/me.jpeg',
      title: 'Project 2',
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
