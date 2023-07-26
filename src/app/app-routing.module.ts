import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsDirectoryComponent } from './projects-directory/projects-directory.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home | Zohaib Ahmed' },
  {
    path: 'resume',
    component: ResumeComponent,
    title: 'Resume | Zohaib Ahmed',
  },
  {
    path: 'projects',
    component: ProjectsDirectoryComponent,
    title: 'Projects | Zohaib Ahmed',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
