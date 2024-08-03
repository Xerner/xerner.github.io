import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppStore } from '../../stores/app.store';
import { ToggleFilterComponent } from './toggle-filter/toggle-filter.component';
import { IFilter } from '../../models/filtering/filter';
import { IProjectCard } from '../../models/project-card';
import { FilterStore } from '../../stores/filter.store';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    CommonModule,
    ToggleFilterComponent,
  ],
  templateUrl: 'filters.component.html',
  styleUrl: 'filters.component.scss',
})
export class FiltersComponent {
  constructor(
    protected appStore: AppStore,
    protected filterStore: FilterStore,
  ) { }

  toggleProjectCardFilter(filter: IFilter<IProjectCard>) {
    var hasFilter = this.filterStore.projectCardFilters() !== null && this.filterStore.projectCardFilters()!.some((f) => f === filter);
    if (hasFilter) {
      this.filterStore.removeProjectCardFilter(filter);
    } else {
      this.filterStore.addProjectCardFilter(filter);
    }
  }
}
