import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-info-block',
  templateUrl: 'info-block.component.html',
  standalone: true,
  imports: [
    MatIconModule,
  ],
})
export class InfoBlockComponent {
  title = input.required<string>();
  icon = input.required<string>();
}
