import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { HamborgerComponent } from "../hamborger/hamborger.component";
import { FiltersComponent } from './filters/filters.component';
import { AccordionDirective } from '../../../repos/common/angular/directives/accordion.directive';
import { TabsDirective } from '../../../repos/common/angular/directives/tabs.directive';
import { TabContentDirective } from '../../../repos/common/angular/directives/tab-content.directive';
import { TabDirective } from '../../../repos/common/angular/directives/tab.directive';

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
