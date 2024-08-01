import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { IProjectCard } from '../../models/project-card';
import { LanguagesComponent } from '../languages/languages.component';
import { ChipComponent } from '../chip/chip.component';
import { DatetimePipe } from '../../pipes/datetime.pipe';
import { TimeFromNowPipe } from '../../pipes/time-from-now.pipe';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    LanguagesComponent,
    ChipComponent,
    DatetimePipe,
    TimeFromNowPipe,
  ],
  templateUrl: 'project-card.component.html',
  // styleUrl: 'project-card.component.scss'
})
export class ProjectCardComponent {
  projectCard = input.required<IProjectCard>();
  index = input<number>(0);
  isEven = computed<boolean>(() => this.index() % 2 === 0);
  isOdd = computed<boolean>(() => this.index() % 2 !== 0);

  constructor() {}
}
