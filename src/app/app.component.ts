import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TooltipComponent } from './tooltip/tooltip.component';
import { StarsComponent } from './stars/stars.component';
import { MyNameComponent } from './my-name/my-name.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TooltipComponent,
    StarsComponent,
    MyNameComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'portfolio';
  nameDelay = 0;
}
