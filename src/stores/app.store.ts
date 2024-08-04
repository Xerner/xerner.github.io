import { computed, Injectable, signal } from "@angular/core";
import { IProjectCard } from "../models/project-card";
import { APP_SETTINGS } from "../settings/appsettings";
import { IFilter } from "../models/filtering/filter";
import { FilterStore } from "./filter.store";

@Injectable({ providedIn: 'root' })
export class AppStore {
  APP_SETTINGS = APP_SETTINGS;
  shouldPlayAnimations = signal<boolean>(true);
  starMinDelay = signal<number>(500);
  starMaxDelay = signal<number>(2000);
  nameDelay = signal<number>(this.starMaxDelay() + 2000);
  starCount = signal<number>(250);
  projectCards = signal<IProjectCard[] | null>(null);
  filteredProjectCards = computed<IProjectCard[] | null>(() => {
    var projectCards = this.projectCards();
    if (projectCards === null) {
      return null;
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
  projectCardTopicFilters = computed<IFilter<IProjectCard>[] | null>(() => {
    var projectCards = this.projectCards();
    if (projectCards === null) {
      return null;
    }
    return projectCards.flatMap(projectCard => {
      return projectCard.repo.topics.flatMap(topic => ({
        name: topic,
        active: false,
        eval: (projectCard_: IProjectCard) => projectCard_.repo.topics.includes(topic),
        value: topic,
      }))
    }).sort((filter1, filter2) => filter1.name > filter2.name ? 1 : -1);
  })
  projectCardLanguageFilters = computed<IFilter<IProjectCard>[] | null>(() => {
    var projectCards = this.projectCards();
    if (projectCards === null) {
      return null;
    }
    var languageFilters = projectCards.flatMap<IFilter<IProjectCard> | null>(projectCard => {
      var languages = projectCard.languages;
      if (languages === null) {
        return null;
      }
      var languageFilters_ = Object.keys(languages).map<IFilter<IProjectCard>>(language => ({
        name: language,
        active: false,
        eval: (projectCard_: IProjectCard) => projectCard_.languages !== null && projectCard_.languages!.hasOwnProperty(language),
        value: language,
      }));
      return languageFilters_;
    })
      .filter(filter => filter !== null)
      .reduce((noDupes, filter) => {
        if (noDupes.find(filter_ => filter_!.name === filter!.name) === undefined) {
          noDupes.push(filter!);
        }
        return noDupes;
      }, [] as IFilter<IProjectCard>[])
      .sort((filter1, filter2) => filter1!.name > filter2!.name ? 1 : -1)
    return languageFilters as IFilter<IProjectCard>[];
  })
  errors = {
    apiLimitError: signal<boolean>(false),
  }

  constructor(
    private filterStore: FilterStore
  ) { }
}
