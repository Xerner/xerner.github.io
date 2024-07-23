import { Injectable } from '@angular/core';
import { GithubApiService } from './github-api.service';
import projectCards from '../config/project-cards.json'
import { from, Observable } from 'rxjs';
import { IProjectCard } from '../models/project-card';

@Injectable({
  providedIn: 'root'
})
export class ProjectCardService {
  constructor(private githubApi: GithubApiService) {
  }

  getProjectCards(): Observable<IProjectCard[]> {
    return from([projectCards])
  }
}
