import { computed, Injectable, signal } from '@angular/core';
import { FilterStore } from './filter.store';
import { IProjectCard } from '../../models/project-card';
import { IFilter } from '../../models/filtering/filter';

@Injectable({
  providedIn: 'root'
})
export class ProjectCardStore {
  projectCards = signal<IProjectCard[]>([]);
  filteredProjectCards = computed<IProjectCard[]>(() => {
    var projectCards = this.projectCards();
    if (projectCards === null) {
      return [];
    }
    var filters = this.filterStore.projectCardFilters();
    if (filters === null) {
      return projectCards;
    }
    return projectCards.filter((projectCard) => {
      for (var filter of filters!) {
        if (!filter.eval(projectCard)) {
          return false;
        }
      }
      return true;
    });
  })
  projectCardTopicFilters = computed<IFilter<IProjectCard>[]>(() => {
    var projectCards = this.projectCards();
    var filteredProjectCards = this.filteredProjectCards();
    if (projectCards === null) {
      return [];
    }
    return projectCards.flatMap(projectCard => {
      return projectCard.repo.topics.flatMap(topic => ({
        name: topic,
        active: false,
        enabled: true,
        eval: (projectCard_: IProjectCard) => projectCard_.repo.topics.includes(topic),
        value: topic,
      }))
    }).sort((filter1, filter2) => filter1.name > filter2.name ? 1 : -1)
      .reduce(this.filterStore.removeDupes, [] as IFilter<IProjectCard>[])
      ;
  })
  projectCardLanguageFilters = computed<IFilter<IProjectCard>[]>(() => {
    var projectCards = this.projectCards();
    if (projectCards === null) {
      return [];
    }
    var languageFilters = projectCards.flatMap<IFilter<IProjectCard> | null>(projectCard => {
      var languages = projectCard.languages;
      if (languages === null) {
        return null;
      }
      var languageFilters_ = Object.keys(languages).map<IFilter<IProjectCard>>(language => ({
        name: language,
        active: false,
        enabled: true,
        eval: (projectCard_: IProjectCard) => projectCard_.languages !== null && projectCard_.languages!.hasOwnProperty(language),
        value: language,
      }))
        .reduce((noDupes, filter) => {
          if (noDupes.find(filter_ => filter_!.name === filter!.name) === undefined) {
            noDupes.push(filter!);
          }
          return noDupes;
        }, [] as IFilter<IProjectCard>[]);
      return languageFilters_;
    })
      .filter(filter => filter !== null)
      .sort((filter1, filter2) => filter1!.name > filter2!.name ? 1 : -1)
      .reduce(this.filterStore.removeDupes, [] as IFilter<IProjectCard>[])
    return languageFilters;
  })

  constructor(
    private filterStore: FilterStore
  ) { }
}
