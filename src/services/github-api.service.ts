import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILanguages } from '../models/github-api/languages';
import { IRepository } from '../models/github-api/repository';
import { APP_SETTINGS } from '../settings/appsettings';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  constructor(
    private http: HttpClient
  ) { }

  getRepositories(repoOwner: string): Observable<IRepository[]>  {
    if (!APP_SETTINGS.features.repos) {
      return of([]);
    }
    return this.http.get<IRepository[]>(`https://api.github.com/users/${repoOwner}/repos`);
  }

  getLanguages(repoOwner: string, repoName: string): Observable<ILanguages> {
    if (!APP_SETTINGS.features.languages) {
      return of({});
    }
    return this.http.get<ILanguages>(`https://api.github.com/repos/${repoOwner}/${repoName}/languages`);
  }

  getFile(repoOwner: string, repoName: string, filepath: string): Observable<Object> {
    if (!APP_SETTINGS.features.portfolioFiles) {
      return of({});
    }
    return this.http.get<Object>(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filepath}`);
  }
}
