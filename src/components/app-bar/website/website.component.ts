import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { IWebsite } from '../../../models/website';

@Component({
  selector: 'app-website',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './website.component.html',
})
export class WebsiteComponent {
  website = input.required<IWebsite>();
}
