import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooltipComponent } from './generic/tooltip/tooltip.component';
import { StarsComponent } from './decorative/stars/stars.component';
import { MyNameComponent } from './decorative/my-name/my-name.component';
import { CloudsComponent } from "./clouds/clouds.component";
import { ProjectCardComponent } from './git/project-card/project-card.component';
import { IProjectCard } from '../models/project-card';
import { ProjectCardService } from '../services/project-card.service';
import { CommonModule } from '@angular/common';
import { AppStore } from '../stores/app.store';
import { CacheStore } from '../stores/cache.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
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
  constructor(
    private projectCardService: ProjectCardService,
    protected appStore: AppStore,
    protected cacheStore: CacheStore,
  ) {}

  ngOnInit() {
    this.projectCardService.populateProjectCards();
  }

  getId(projectCard: IProjectCard) {
    return projectCard.repo.name + "-project-card";
  }
}
