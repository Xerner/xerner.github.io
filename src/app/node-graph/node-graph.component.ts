import { CommonModule } from '@angular/common';
import { Component, ElementRef, input } from '@angular/core';
import { Coordinate, Graph, GraphNode } from '../../models/graph';
import { StarSource } from '../../models/stars';

@Component({
  selector: 'app-node-graph',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './node-graph.component.html',
})
export class StarGraphComponent {
  protected readonly img = StarSource.Star8x8;
  protected readonly nodeRadius = 4;
  protected readonly nodeWidth = this.nodeRadius * 2;
  protected readonly nodeHeight = this.nodeRadius * 2;
  protected readonly lineOpacity = 1;

  graph = input.required<Graph>();

  constructor(protected elementRef: ElementRef) {
  }

  // Add the size of a star to the provided number
  adjustCoordinate(node: GraphNode, nodeOffset: number, totalWidthGetter: (elementRef: ElementRef) => number, coordGetter: (node: GraphNode) => Coordinate) {
    var coord = coordGetter(node);
    var newCoord = coord.coordinate;
    if (coord.isPercentage) {
      newCoord *= totalWidthGetter(this.elementRef);
    }
    return newCoord - nodeOffset;
  }

  getXCoord(node: GraphNode) {
    return node.x;
  }

  getYCoord(node: GraphNode) {
    return node.y;
  }

  getTotalWidth(elementRef: ElementRef) {
    return elementRef.nativeElement.clientWidth;
  }

  getTotalHeight(elementRef: ElementRef) {
    return elementRef.nativeElement.clientHeight;
  }
}
