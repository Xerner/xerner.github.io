import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { IStar } from '../../interfaces/stars';
import { StarComponent } from '../star/star.component';
import { StarsService } from '../../services/stars.service';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [
    CommonModule,
    StarComponent
  ],
  templateUrl: './stars.component.html',
  host: {
    style: 'position: relative;'
  }
})
export class StarsComponent
{
  starCount = input.required<number>();
  minDelay = input(500);
  maxDelay = input(2000);
  stars = signal<IStar[]>([]);

  constructor(private starsService: StarsService) {
  }

  ngOnInit() {
    this.stars.set(this.starsService.createStars(this.starCount(), this.maxDelay(), this.minDelay()));
  }

  getStarStyle(star: IStar) {
    return `position: absolute; left: ${star.left}%; top: ${star.top}%`;
  }
}
