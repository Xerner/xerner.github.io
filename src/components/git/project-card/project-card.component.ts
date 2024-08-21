import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IProjectCard } from '../../../models/project-card';
import { LanguagesComponent } from '../languages/languages.component';
import { AppSettingsService } from '../../../services/appsettings.service';
import { ContributorsComponent } from '../contributors/contributors.component';
import { DatetimePipe } from '../../../../repos/common/angular/pipes/datetime.pipe';
import { TimeFromNowPipe } from '../../../../repos/common/angular/pipes/time-from-now.pipe';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    LanguagesComponent,
    DatetimePipe,
    TimeFromNowPipe,
    ContributorsComponent,
  ],
  templateUrl: 'project-card.component.html',
  // styleUrl: 'project-card.component.scss'
})
export class ProjectCardComponent {
  projectCard = input.required<IProjectCard>();
  index = input<number>(0);

  constructor(
    protected appSettings: AppSettingsService,
  ) {}
}
