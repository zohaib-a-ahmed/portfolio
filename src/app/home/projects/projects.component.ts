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
  isLargeScreen = false;

  projects: Project[] = [
    {
      image: 'assets/projects/priorify.png',
      title: 'Priorify',
      subtitle: 'Productivity Manager Web App',
    },
    {
      image: 'assets/projects/researchGPT.png',
      title: 'researchGPT',
      subtitle: 'LLM Research Assistant',
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

    this.breakpointObserver
      .observe([Breakpoints.XLarge])
      .subscribe((result) => {
        this.isLargeScreen = result.matches;
      });
  }
}
