import { CommonModule } from '@angular/common';
import { Component, input, output, signal } from '@angular/core';
import { IFilter } from '../../../models/filtering/filter';

@Component({
  selector: 'app-toggle-filter',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './toggle-filter.component.html',
})
export class ToggleFilterComponent<T> {
  filter = input.required<IFilter<T>>();
  toggle = output<IFilter<T>>();
  isActive = signal<boolean>(false);

  ngOnInit() {
    this.isActive.set(this.filter().active);
  }

  toggleFilter() {
    this.filter().active = !this.filter().active;
    this.isActive.set(this.filter().active);
    this.toggle.emit(this.filter());
  }
}
