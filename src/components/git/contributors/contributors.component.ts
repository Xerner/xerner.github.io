import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { IContributor } from '../../../models/github-api/contributor';

@Component({
  selector: 'app-contributors',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './contributors.component.html',
})
export class ContributorsComponent {
  contributors = input.required<IContributor[]>();
  count = input<number>(6);
  shownContributors = computed(() => this.contributors()?.slice(0, this.count()));
  hiddenContributors = computed(() => this.contributors()?.slice(this.count()));

  getHiddenContributorsTooltip() {
    var hiddenCount = this.hiddenContributors().length;
    var hiddenContributorsStr = this.hiddenContributors().map(c => c.login).join('\n');
    var tooltipStr = `+${hiddenCount} more contributors${hiddenCount > 1 ? 's' : ''}\n\n${hiddenContributorsStr}`;
    return tooltipStr;
  }
}
