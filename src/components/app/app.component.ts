import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { IProjectCard } from "../../models/project-card";
import { ProjectCardService } from "../../services/project-card.service";
import { AppStore } from "../../stores/app.store";
import { CacheStore } from "../../stores/cache.store";
import { CloudsComponent } from "../decorative/clouds/clouds.component";
import { MyNameComponent } from "../decorative/my-name/my-name.component";
import { StarsComponent } from "../decorative/stars/stars.component";
import { TooltipComponent } from "../generic/tooltip/tooltip.component";
import { ProjectCardComponent } from "../git/project-card/project-card.component";
import { FiltersComponent } from "../filters/filters.component";

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
    ProjectCardComponent,
    FiltersComponent,
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
