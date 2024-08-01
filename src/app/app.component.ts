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
import { CommonModule } from '@angular/common';
import { AppStore } from '../stores/app.store';

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
    protected appStore: AppStore
  ) {}

  ngOnInit() {
    this.projectCardService.populateProjectCards();
  }

  getId(projectCard: IProjectCard) {
    return projectCard.repo.name + "-project-card";
  }

  formatCache() {
    var json = JSON.stringify(this.appStore.urlCache, null, 2);
    var newTab = window.open('data:text/json,' + encodeURIComponent(json), '_blank');
    if (newTab === null) {
      window.alert("Failed to open new tab. Please allow popups for this site.");
      return;
    }
    newTab.focus();
  }
}
