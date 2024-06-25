import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
})
export class TooltipComponent {
  tooltip = input<string>();
}
