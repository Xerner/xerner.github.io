import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILanguages } from '../models/github-api/languages';
import { IRepository } from '../models/github-api/repository';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  constructor(
    private http: HttpClient
  ) { }

  getRepositories(repoOwner: string) {
    return this.http.get<IRepository[]>(`https://api.github.com/users/${repoOwner}/repos`);
  }

  getLanguages(repoOwner: string, repoName: string) {
    return this.http.get<ILanguages>(`https://api.github.com/repos/${repoOwner}/${repoName}/languages`);
  }

  getFile(repoOwner: string, repoName: string, filepath: string) {
    return this.http.get<Object>(`https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filepath}`);
  }
}
