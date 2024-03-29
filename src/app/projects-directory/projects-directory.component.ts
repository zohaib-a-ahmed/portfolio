import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

interface Project {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  flip: boolean;
  link?: string;
}

@Component({
  selector: 'app-projects-directory',
  templateUrl: './projects-directory.component.html',
  styleUrls: ['./projects-directory.component.css'],
})
export class ProjectsDirectoryComponent {
  projects: Project[] = [
    {
      title: 'Priorify',
      subtitle: 'Productivity Manager Web App',
      description: `
      Priorify is an application I developed for myself and some of my peers that allows users to manage their own upcoming events and assignments. It was developed to refresh my practice with full-stack applications, 
      and be something I can utilize for my last semester in college. The application is divided into two parts. The frontend is served with NextJS and Mantine/TailwindCSS styling that provides an intuitive UI and provides OAuth authentication with Google. 
      The backend uses the Flask framework to serve a RESTful API that manages Supabase's PostgreSQL database storing user calendars. 
      `,
      image: 'assets/projects/priorify.png',
      flip: false,
      link: 'https://github.com/zohaib-a-ahmed/priorify',
    },
    {
      title: 'researchGPT',
      subtitle: 'LLM Research Assistant',
      description: `
      researchGPT is a small project I made to begin familiarizing myself with large language models (LLMs). The application is a small chat interface with an autonomous agent,
       designed to find research on a given topic and provide QA over it. Its merits come with the ability to autonomously search for related articles, vectorize them, and reference them 
      in a conversation. The application is built using the Langchain framework, queries the Semantic Scholar database for research, and utilizes GPT-3.5 for processing. This is all bootstrapped 
      onto the Chainlit UI for easy deployment. 
      `,
      image: 'assets/projects/researchGPT.png',
      flip: true,
      link: 'https://github.com/zohaib-a-ahmed/researchGPT',
    },
    {
      title: 'Atlas',
      subtitle: 'AI Fitness Trainer',
      description: `
      My first "passion project". One of my hobbies is weightlifting and fitness and I wanted to learn web development with UI frameworks, so I created Atlas.
      Atlas is a full-stack web application that provides exercise and nutrition advice via a GPT-powered chatbot. I leveraged Next.js and Bootstrap for a streamlined infrastructure 
      that simulates a conversation with a personal trainer. 
      `,
      image: 'assets/projects/atlas.png',
      flip: false,
      link: 'https://github.com/zohaib-a-ahmed/trainerPT',
    },
    {
      title: 'Billiken Bot',
      subtitle: 'SLU Slackbot Assistant',
      description: `
      In one of my courses, CSCI-3300: Software Engineering, my group was tasked to create a SLU-oriented, professional Slack assistant. Following a strict Agile development cycle, 
      consisting of a Kanban board, stand-ups, sprints, retros, etc. we developed Billiken Bot. Billiken Bot can scrape the web for SLU-centric news, dining, finals schedules, and building/office hours
      in addition to managing users' schedules and reminders. The application is written in Python utilizing the Slack API and SQLite for data management along with a Gitlab CI/CD pipeline written with Pytest. 
      `,
      image: 'assets/projects/slackchat.png',
      flip: true,
    },
  ];

  isMobileView = false;
  private breakpointSubscription: Subscription = new Subscription();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointSubscription = this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .subscribe((result) => {
        this.isMobileView = result.breakpoints[Breakpoints.XSmall];
      });
  }

  ngOnDestroy() {
    this.breakpointSubscription.unsubscribe();
  }
}
