import { CommonModule } from '@angular/common';
import { Component, ElementRef, input } from '@angular/core';

@Component({
  selector: 'app-chip',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './chip.component.html',
  host: {
    class: 'chip',
  },
})
export class ChipComponent {}
