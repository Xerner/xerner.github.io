import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooltipComponent } from './tooltip/tooltip.component';
import { StarsComponent } from './stars/stars.component';
import { MyNameComponent } from './my-name/my-name.component';
import { CloudsComponent } from "./clouds/clouds.component";
import { ProjectCardComponent } from './project-card/project-card.component';
import { IProjectCard } from '../models/project-card';
import { GithubApiService } from '../services/github-api.service';
import { ProjectCardService } from '../services/project-card.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TooltipComponent,
    StarsComponent,
    MyNameComponent,
    CloudsComponent,
    ProjectCardComponent
],
  templateUrl: './app.component.html',
})
export class AppComponent {
  projectCards = signal<IProjectCard[]>([]);

  constructor(private projectCardService: ProjectCardService) {
  }

  ngOnInit() {
    this.projectCardService.getProjectCards().subscribe(projectCards => {
      this.projectCards.set(projectCards)
    })
  }
}
