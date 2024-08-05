import { Injectable } from '@angular/core';
import { GithubApiService } from './github-api.service';
import { concatAll, forkJoin, map, of } from 'rxjs';
import { IProjectCard } from '../models/project-card';
import { APP_SETTINGS } from '../settings/appsettings.js'
import { IRepository } from '../models/github-api/repository';
import { ILanguages } from '../models/github-api/languages';
import { IContributor } from '../models/github-api/contributor';
import { HttpClient } from '@angular/common/http';
import { ProjectCardStore } from './stores/project-card.store';
import { AppStore } from './stores/app.store';

@Injectable({
  providedIn: 'root'
})
export class ProjectCardService {
  constructor(
    private githubApi: GithubApiService,
    private http: HttpClient,
    private projectCardStore: ProjectCardStore,
    private appStore: AppStore,
  ) { }

  populateProjectCards() {
    return this.githubApi.getRepositories(APP_SETTINGS.user)
      .pipe(
        // delay(3000),
        map(repos => this.appStore.APP_SETTINGS.api !== undefined ? repos.slice(0, this.appStore.APP_SETTINGS.api.limitRepos) : repos),
        map(repos => forkJoin(repos.map(repo => this.getProjectCard(repo)))),
        concatAll(),
      ).subscribe(projectCards => this.projectCardStore.projectCards.set(projectCards))
  }

  // getRepositoryPortfolioFileFromApi(repoOwner: string): Observable<IProjectCard> {
  //   return this.githubApi.getRepositories(repoOwner).pipe(
  //     concatMap(repo => this.githubApi.getFile(repoOwner, repo., APP_SETTINGS.portfolioJsonFilePath)),
  //     map(file => file as IProjectCard)
  //   )
  // }

  getProjectCard(repo: IRepository) {
    var projectCardObservables = forkJoin([
      of(repo),
      this.http.get<ILanguages>(repo.languages_url),
      this.http.get<IContributor[]>(repo.contributors_url),
    ]).pipe(
      map(([repo, languages, contributors]) => this.createProjectCard(repo, languages, contributors))
    );
    return projectCardObservables;
  }

  createProjectCard(repo: IRepository, languages: ILanguages, contributors: IContributor[]): IProjectCard {
    return {
      repo: repo,
      languages: languages,
      contributors: contributors
    }
  }
}
