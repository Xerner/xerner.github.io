import { Injectable, signal } from '@angular/core';
import { GithubApiService } from './github-api.service';
import { concatMap, forkJoin, map, merge, mergeAll, Observable, of, take } from 'rxjs';
import { IProjectCard } from '../models/project-card';
import { APP_SETTINGS } from '../settings/appsettings.js'
import { IRepository } from '../models/github-api/repository';
import { ILanguages } from '../models/github-api/languages';
import { AppStore } from '../stores/app.store';
import { IContributor } from '../models/github-api/contributor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectCardService {
  constructor(
    private githubApi: GithubApiService,
    private http: HttpClient,
    private appStore: AppStore
  ) { }

  populateProjectCards() {
    return this.githubApi.getRepositories(APP_SETTINGS.user)
      .pipe(
        // delay(3000),
        map<IRepository[], [IRepository, ILanguages, IContributor]>(repos => {
          repos = repos.slice(0, 5);
          return repos.map(repo => {
            var projectCardObservables = forkJoin([
              of(repo),
              this.http.get<ILanguages>(repo.languages_url),
              this.http.get<IContributor[]>(repo.contributors_url),
            ])
            return projectCardObservables;
          });
        }),
        map(projectCards => {
          // var projectCards = repos.map<IProjectCard>(repo => this.createEmptyProjectCard(repo))
          // this.appStore.projectCards.set(projectCards)
          return merge(...projectCards.map(projectCard => this.populateLanguages(projectCard)));
        }
        ),
        mergeAll()
      ).subscribe()
  }

  private populateLanguages(projectCard: IProjectCard) {
    return this.githubApi.getLanguages(APP_SETTINGS.user, projectCard.repo.name).pipe(map(languages => {
      projectCard.languages = languages
    }))
  }

  // getRepositoryPortfolioFileFromApi(repoOwner: string): Observable<IProjectCard> {
  //   return this.githubApi.getRepositories(repoOwner).pipe(
  //     concatMap(repo => this.githubApi.getFile(repoOwner, repo., APP_SETTINGS.portfolioJsonFilePath)),
  //     map(file => file as IProjectCard)
  //   )
  // }

  createEmptyProjectCard(repo: IRepository): IProjectCard {
    return {
      repo: repo,
      languages: null,
      contributors: null
    }
  }

  createProjectCard(repo: IRepository, languages: ILanguages, contributors: IContributor[]): IProjectCard {
    return {
      repo: repo,
      languages: languages,
      contributors: contributors
    }
  }
}
