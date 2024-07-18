import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LARGEST_CLOUD_HEIGHT, TOP_OFFSET } from '../../models/clouds';
import { CloudComponent } from './cloud/cloud.component';

@Component({
  selector: 'app-clouds',
  standalone: true,
  imports: [
    CommonModule,
    CloudComponent
  ],
  templateUrl: './clouds.component.html',
})
export class CloudsComponent {
  TOP_OFFSET = TOP_OFFSET
  LARGEST_CLOUD_HEIGHT = LARGEST_CLOUD_HEIGHT
}
