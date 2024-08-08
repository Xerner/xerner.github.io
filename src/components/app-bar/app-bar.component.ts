import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { AccordionDirective } from '../../directives/accordion.directive';
import { TabsDirective } from '../../directives/tabs.directive';
import { TabDirective } from '../../directives/tab.directive';
import { TabContentDirective } from '../../directives/tab-content.directive';
import { HamborgerComponent } from "../hamborger/hamborger.component";
import { FiltersComponent } from './filters/filters.component';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [
    CommonModule,
    AccordionDirective,
    TabsDirective,
    TabDirective,
    TabContentDirective,
    FiltersComponent,
    HamborgerComponent,
],
  templateUrl: './app-bar.component.html',
})
export class AppBarComponent {
  isAccordionOpen = signal<boolean>(false);

  onHamburgerClick() {
    this.isAccordionOpen.set(!this.isAccordionOpen());
  }
}
