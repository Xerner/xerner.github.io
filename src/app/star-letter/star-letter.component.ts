import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Graph } from '../../models/graph';
import { StarGraphComponent } from '../node-graph/node-graph.component';
import { STAR_LETTER_GRAPHS, StarLetters } from '../../models/star-letters';

@Component({
  selector: 'app-star-letter',
  standalone: true,
  imports: [
    CommonModule,
    StarGraphComponent,
  ],
  templateUrl: './star-letter.component.html',
})
export class StarLetterComponent {
  letter = input.required<StarLetters>();
  width = input<number>(100);
  height = input<number>(100);

  graph!: Graph;

  ngOnInit() {
    this.graph = STAR_LETTER_GRAPHS[this.letter()].graph;;
  }
}
