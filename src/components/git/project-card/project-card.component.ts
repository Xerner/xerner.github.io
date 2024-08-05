import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IProjectCard } from '../../../models/project-card';
import { LanguagesComponent } from '../languages/languages.component';
import { DatetimePipe } from '../../../pipes/datetime.pipe';
import { TimeFromNowPipe } from '../../../pipes/time-from-now.pipe';
import { AppSettingsService } from '../../../services/appsettings.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    LanguagesComponent,
    DatetimePipe,
    TimeFromNowPipe,
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
