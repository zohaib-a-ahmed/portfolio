import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-directory',
  templateUrl: './projects-directory.component.html',
  styleUrls: ['./projects-directory.component.css'],
})
export class ProjectsDirectoryComponent {
  projects: any[] = [
    {
      title: 'Atlas',
      subtitle: 'AI Fitness Trainer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit dui, posuere   eu, suscipit vehicula ex. Mauris scelerisque diam vel scelerisque sollicitudin. Maecenas magna turpis, tempus quis fermentum vel, rutrum quis nulla. Ut congue nisl et dui laoreet, sed ullamcorper arcu rutrum. Donec nec egestas lorem, quis pretium mi. Ut aliquet sed orci id consequat. Nulla suscipit enim eget neque iaculis, et porta nisi pellentesque. Proin a dignissim lacus.',
      image: 'assets/projects/atlas.png',
      flip: false,
    },
    {
      title: 'Billiken Bot',
      subtitle: 'SLU Slackbot Assistant',
      description:
        'In vitae magna diam. Vivamus tempus, purus ac venenatis vehicula, sem dolor pharetra nibh, ac egestas ex sapien sed orci. Ut odio neque, pellentesque a tempor id, viverra porttitor velit. Vivamus sagittis nulla ante, id dictum est facilisis sit amet. Aliquam ut semper metus. Nam sit amet sapien vel nunc feugiat ornare sit amet eu leo. Proin blandit elementum laoreet. Etiam pretium aliquet arcu nec lacinia. Etiam imperdiet feugiat tempus. Sed ut egestas augue. Proin vitae velit diam. Suspendisse quam augue, consequat eget arcu id, luctus mattis nibh. Duis finibus, felis in congue mollis, arcu lacus ornare justo, quis convallis ante quam ac lorem. Aliquam dignissim in ligula nec feugiat.',
      image: 'assets/projects/slackchat.jpeg',
      flip: true,
    },
  ];
}
