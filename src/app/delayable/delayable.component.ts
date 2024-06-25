import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-delayable',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './delayable.component.html',
})
export class DelayableComponent {
  delay = input.required<number>();
  protected shouldRender = signal<boolean>(false);

  ngOnInit() {
    setTimeout(this.show.bind(this), this.delay());
  }

  show() {
    this.shouldRender.set(true);
  }
}
