import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html'
})
export class TooltipComponent {
  tooltip = input<string>();
}
