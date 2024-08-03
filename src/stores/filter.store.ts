import { Injectable, signal } from '@angular/core';
import { IFilter } from '../models/filtering/filter';
import { IProjectCard } from '../models/project-card';

@Injectable({
  providedIn: 'root'
})
export class FilterStore {
  projectCardFilters = signal<IFilter<IProjectCard>[] | null>(null);

  addProjectCardFilter(filter: IFilter<IProjectCard>) {
    this.projectCardFilters.set([...(this.projectCardFilters() || []), filter]);
  }

  removeProjectCardFilter(filter: IFilter<IProjectCard>) {
    this.projectCardFilters.set((this.projectCardFilters() || []).filter((f) => f !== filter));
  }
}
