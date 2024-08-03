import { Injectable, signal } from '@angular/core';
import { GithubApiService } from './github-api.service';
import { map, merge, mergeAll, Observable, take } from 'rxjs';
import { IProjectCard } from '../models/project-card';
import { APP_SETTINGS } from '../settings/appsettings.js'
import { IRepository } from '../models/github-api/repository';
import { ILanguages } from '../models/github-api/languages';
import { AppStore } from '../stores/app.store';

@Injectable({
  providedIn: 'root'
})
export class ProjectCardService {
  constructor(
    private githubApi: GithubApiService,
    private appStore: AppStore
  ) { }

  populateProjectCards() {
    return this.githubApi.getRepositories(APP_SETTINGS.user)
      .pipe(
        // delay(3000),
        map<IRepository[], IProjectCard[]>(repos => {
            repos = repos.slice(0, 5);
            var projectCards = repos.map<IProjectCard>(repo => ({
            repo: signal<IRepository>(repo),
            languages: signal<ILanguages | null>(null)
          }))
          this.appStore.projectCards.set(projectCards)
          return projectCards;
        }),
        map<IProjectCard[], Observable<void>>(projectCards => {
            return merge(...projectCards.map(projectCard => this.populateLanguages(projectCard)));
          }
        ),
        mergeAll()
      ).subscribe()
  }

  private populateLanguages(projectCard: IProjectCard) {
    return this.githubApi.getLanguages(APP_SETTINGS.user, projectCard.repo().name).pipe(map(languages => {
      projectCard.languages.set(languages)
    }))
  }

  // getRepositoryPortfolioFileFromApi(repoOwner: string): Observable<IProjectCard> {
  //   return this.githubApi.getRepositories(repoOwner).pipe(
  //     concatMap(repo => this.githubApi.getFile(repoOwner, repo., APP_SETTINGS.portfolioJsonFilePath)),
  //     map(file => file as IProjectCard)
  //   )
  // }
}
