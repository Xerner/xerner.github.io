import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppStore } from '../../stores/app.store';
import { StarLetterComponent } from '../star-letter/star-letter.component';
import { DelayDirective } from '../../directives/delay.directive';

@Component({
  selector: 'app-my-name',
  standalone: true,
  imports: [
    CommonModule,
    StarLetterComponent,
    DelayDirective
  ],
  templateUrl: './my-name.component.html',
})
export class MyNameComponent {
  constructor(protected appStore: AppStore) {
  }
}
