import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { DelayableComponent } from '../delayable/delayable.component';
import { randomInt } from '../../library/math';
import { FadeType, StarSource, FadeTypes, StarSources } from '../../models/stars';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [
    CommonModule,
    DelayableComponent
  ],
  templateUrl: './star.component.html',
})
export class StarComponent {
  left = input.required<number>();
  top = input.required<number>();
  transform = input.required<string>();
  delay = input.required<number>();
  hasNoFade = input<boolean>(false);
  fadeType = input<FadeType>(1);
  fadeClass = signal<string>("");
  starSourceUrl = signal<string>(StarSource.Star8x8);

  private actuallyHasNoFade() {
    var hasNoFadeTime = this.fadeType() === 0;
    var hasNoFade = this.hasNoFade() && hasNoFadeTime;
    return hasNoFade;
  }

  getRandomStar() {
    return StarSources[Math.random() > 0.3 ? 0 : 1];
  }

  ngOnInit() {
	  this.starSourceUrl.set(this.getRandomStar());
    this.setFadeClass();
  }

  setFadeClass() {
    if (this.actuallyHasNoFade()) {
      var fadeType = randomInt(3) as FadeType;
      this.fadeClass.set(FadeTypes[fadeType]);
    }
    if (this.fadeType()) {
      this.fadeClass.set(FadeTypes[this.fadeType()]);
    }
  }

  getClass() {
    return `star animate__animated animate__slower ${this.fadeClass()}`;
  }

  getStyle() {
    return `position: absolute; left: ${this.left()}%; top: ${this.top()}%; transform: ${this.transform()}`;
  }
}
