import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IProjectCard } from '../../models/project-card';
import { LanguagesComponent } from '../languages/languages.component';
import { ChipComponent } from '../chip/chip.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    LanguagesComponent,
    ChipComponent
  ],
  templateUrl: './project-card.component.html',
})
export class ProjectCardComponent {
  projectCard = input.required<IProjectCard>();

  constructor() {}

  getId() {
    return this.projectCard().name + "-project-card";
  }
}
