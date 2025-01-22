import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { HamborgerComponent } from "../hamborger/hamborger.component";
import { FiltersComponent } from './filters/filters.component';
import { AccordionDirective } from 'common/angular/directives/accordion.directive';
import { TabsDirective } from 'common/angular/directives/tabs.directive';
import { TabDirective } from 'common/angular/directives/tab.directive';
import { TabContentDirective } from 'common/angular/directives/tab-content.directive';

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
