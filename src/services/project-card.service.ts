import { Injectable } from '@angular/core';
import { GithubApiService } from './github-api.service';
import { concatMap, from, map, Observable } from 'rxjs';
import { IProjectCard } from '../models/project-card';
import PROJECT_CARDS from '../config/project-cards.json'
import APP_SETTINGS from '../config/appsettings.json'

@Injectable({
  providedIn: 'root'
})
export class ProjectCardService {
  constructor(private githubApi: GithubApiService) {
  }

  getProjectCards(): Observable<IProjectCard[]> {
    // return from([PROJECT_CARDS])
    return this.githubApi.getRepositories(APP_SETTINGS.user)
      .pipe(
        map(repos => repos.map<IProjectCard>(repo => {
          return {
            repo: repo,
          }
        }))
      );
  }

  // getRepositoryPortfolioFileFromApi(repoOwner: string): Observable<IProjectCard> {
  //   return this.githubApi.getRepositories(repoOwner).pipe(
  //     concatMap(repo => this.githubApi.getFile(repoOwner, repo., APP_SETTINGS.portfolioJsonFilePath)),
  //     map(file => file as IProjectCard)
  //   )
  // }
}
