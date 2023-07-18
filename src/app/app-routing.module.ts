import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component'; // Import the ResumeComponent
import { ProjectsDirectoryComponent } from './projects-directory/projects-directory.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route, HomeComponent is the main page
  { path: 'resume', component: ResumeComponent }, // Route for ResumeComponent
  { path: 'projects', component: ProjectsDirectoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
