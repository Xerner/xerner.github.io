import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
  selector: 'app-hamborger',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './hamborger.component.html',
})
export class HamborgerComponent {
  @Output() click = new EventEmitter<void>;
  isOpen = input.required<boolean>();
}
