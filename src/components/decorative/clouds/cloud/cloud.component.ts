import { CommonModule } from '@angular/common';
import { Component, computed, input, OnInit, signal } from '@angular/core';
import { ICloud, CLOUD_VIEWWIDTH_MULTIPLIER, UPDATE_INTERVAL_S, CLOUD_SPEEDS, UPDATE_INTERVAL_MS } from '../../../../models/clouds';
import { MathExt } from '../../../../../repos/common/library/math';

@Component({
  selector: 'app-cloud',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cloud.component.html',
})
export class CloudComponent implements OnInit {
  readonly FORE_CLOUD_Z = 9
  readonly BACK_CLOUD_Z = 0

  timeout: NodeJS.Timeout | null = null;
  cloud = input.required<ICloud>();
  skyHeight = input.required<number>();
  // top = computed(() => {
  //   return this.getTop();
  // });
  left = signal<number>(0);
  distance = input<number>(1);
  size = input<number>(1);
  calculatedDistance = computed(() => {
    return this.distance ? MathExt.clamp(this.distance(), 0.1, Number.MAX_SAFE_INTEGER) : 1;
  })
  calculatedSize = computed(() => {
    return this.calcSize(this.calculatedDistance(), this.size() !== undefined ? this.size() : 1)
  })
  cloudViewWidth = computed(() => {
    return this.size() * CLOUD_VIEWWIDTH_MULTIPLIER
  })


  ngOnInit(): void {
    this.left.set(this.cloud().initialLeft);
    window.setInterval(() => {
      this.left.set(this.calcCloudLeftAfterMove(this.left(), this.calculatedDistance(), this.cloudViewWidth() / 100, UPDATE_INTERVAL_S, CLOUD_SPEEDS.FAST));
    }, UPDATE_INTERVAL_MS);
  }

  calcSize(distance: number, size: number) {
    return distance * size
  }

  calcCloudLeftAfterMove(left: number, distance: number, cloudViewwidth: number, deltaTime: number, speed?: number) {
    // Initialize speed if not provided
    var _speed = speed !== undefined ? speed : CLOUD_SPEEDS.MEDIUM
    _speed = _speed * distance * deltaTime
    var newLeft = left + _speed
    if (newLeft > 1) {
      return -cloudViewwidth
    }

    return newLeft
  }

  getZIndex() {
    return MathExt.denormalize(this.calculatedDistance(), this.BACK_CLOUD_Z, this.FORE_CLOUD_Z, true);
  }

  getSrc() {
    return `assets/images/clouds/cloud${this.cloud().cloudIndex}.png`
  }

  // getTop() {
  //   var top = Math.random() * this.skyHeight();
  //   console.log(top);
  //   return top;
  // }
}
