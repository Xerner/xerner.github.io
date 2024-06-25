import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { AppStore } from '../../services/stores/app.store';
import { DelayableComponent } from '../delayable/delayable.component';
import { StarLetterComponent } from '../star-letter/star-letter.component';

@Component({
  selector: 'app-my-name',
  standalone: true,
  imports: [
    CommonModule,
    DelayableComponent,
    StarLetterComponent,
  ],
  templateUrl: './my-name.component.html',
})
export class MyNameComponent {
  delay = input.required<number>();

  /**
   *
   */
  constructor(protected appStore: AppStore) {
  }
}
