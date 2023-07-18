import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import the AppRoutingModule

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { AboutComponent } from './home/about/about.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsDirectoryComponent } from './projects-directory/projects-directory.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AboutComponent,
    ProjectsComponent,
    ResumeComponent,
    ProjectsDirectoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule], // Add AppRoutingModule to the imports array
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
