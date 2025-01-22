import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILanguages } from '../models/github-api/languages';
import { IRepository } from '../models/github-api/repository';
import { Observable, of } from 'rxjs';
import { Feature } from 'models/features';
import { FeatureService } from 'common/angular/services';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  constructor(
    private http: HttpClient,
    private featureService: FeatureService<Feature>
  ) { }

  getRepositories(repoOwner: string): Observable<IRepository[]>  {
    if (!this.featureService.features.repos.enabled) {
      return of([]);
    }
    return this.http.get<IRepository[]>(`https://api.github.com/users/${repoOwner}/repos`);
  }

  getLanguages(repoOwner: string, repoName: string): Observable<ILanguages> {
    if (!this.featureService.features.languages.enabled) {
      return of({});
    }
    return this.http.get<ILanguages>(`https://api.github.com/repos/${repoOwner}/${repoName}/languages`);
  }

  getFile(repoOwner: string, repoName: string, filepath: string): Observable<Object> {
    if (!this.featureService.features.portfolioFiles.enabled) {
      return of({});
    }
    return this.http.get<Object>(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filepath}`);
  }
}
