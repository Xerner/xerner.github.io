import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { StarsService } from '../../../services/stars.service';
import { AppStore } from '../../../services/stores/app.store';
import { IStar } from '../../../models/stars';

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
  stars = signal<IStar[]>([]);

  constructor(
    private starsService: StarsService,
    private appStore: AppStore
  ) {
  }

  ngOnInit() {
    this.stars.set(this.starsService.createStars(this.appStore.starCount(), this.appStore.starMaxDelay(), this.appStore.starMinDelay()));
  }

  getStarStyle(star: IStar) {
    return `position: absolute; left: ${star.left}%; top: ${star.top}%`;
  }
}
