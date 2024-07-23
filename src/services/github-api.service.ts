import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILanguages } from '../models/github-api/languages';
import { IRepository } from '../models/github-api/repository';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  readonly BASE_URL = "https://api.github.com/repos"

  constructor(
    private http: HttpClient
  ) {}

  getRepositories(repoOwner: string) {
    return this.http.get<IRepository>(`${this.BASE_URL}/${repoOwner}`);
  }

  getLanguages(repoName: string, repoOwner: string) {
    return this.http.get<ILanguages>(`${this.BASE_URL}/${repoOwner}/${repoName}/languages`);
  }
}
