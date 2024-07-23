import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './chip.component.html',
})
export class ChipComponent {
  label = input.required<string>()
}
