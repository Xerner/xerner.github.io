import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './languages.component.html',
})
export class LanguagesComponent {
  repoName = input.required<string>();
  repoOwner = input.required<string>();
  protected languages = signal<any>("");

  constructor(
    protected githubApi: GithubApiService,
  ) {}

  fetchLanguages() {
    return this.githubApi.getLanguages(this.repoName(), this.repoOwner());
  }
}
