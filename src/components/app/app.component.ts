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
import { FiltersComponent } from "../filters/filters.component";
import { AppStore } from "../../services/stores/app.store";
import { ProjectCardStore } from "../../services/stores/project-card.store";
import { CacheStore } from "../../services/stores/cache.store";
import { AccordionDirective } from "../../directives/accordion.directive";

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
    AccordionDirective,
  ],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  isAccordionOpen = signal<boolean>(false);

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

  onHamburgerClick() {
    this.isAccordionOpen.set(!this.isAccordionOpen());
  }
}
