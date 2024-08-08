import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { IProjectCard } from "../../models/project-card";
import { ProjectCardService } from "../../services/project-card.service";
import { CloudsComponent } from "../decorative/clouds/clouds.component";
import { MyNameComponent } from "../decorative/my-name/my-name.component";
import { StarsComponent } from "../decorative/stars/stars.component";
import { TooltipComponent } from "../generic/tooltip/tooltip.component";
import { ProjectCardComponent } from "../git/project-card/project-card.component";
import { AppStore } from "../../services/stores/app.store";
import { ProjectCardStore } from "../../services/stores/project-card.store";
import { CacheStore } from "../../services/stores/cache.store";
import { AccordionDirective } from "../../directives/accordion.directive";
import { TabDirective } from "../../directives/tab.directive";
import { TabsDirective } from "../../directives/tabs.directive";
import { TabContentDirective } from "../../directives/tab-content.directive";
import { FiltersComponent } from "../app-bar/filters/filters.component";
import { AppBarComponent } from "../app-bar/app-bar/app-bar.component";

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
    AppBarComponent,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  constructor(
    private projectCardService: ProjectCardService,
    protected appStore: AppStore,
    protected projectCardStore: ProjectCardStore,
    protected cacheStore: CacheStore,
  ) { }

  ngOnInit() {
    this.projectCardService.populateProjectCards();
  }

  getId(projectCard: IProjectCard) {
    return projectCard.repo.name + "-project-card";
  }
}
