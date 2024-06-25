import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { Graph, GraphEdge, GraphNode } from '../../models/graph';
import { StarSource } from '../../models/stars';

@Component({
  selector: 'app-star-graph',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './star-graph.component.html',
})
export class StarGraphComponent {
  protected readonly img = StarSource.Star8x8;
  protected readonly radius = 4;
  protected readonly starWidth = this.radius * 2;
  protected readonly starHeight = this.radius * 2;
  protected readonly lineOpacity = 1;

  width = input.required<number>();
  height = input.required<number>();
  // TODO: replace number[][] type with FixedArray from ColorSlicer
  nodes = input.required<GraphNode[]>(); // x,y coords
  edges = input.required<GraphEdge[]>();
  graph = signal<Graph>(new Graph());

  ngOnInit() {
    this.graph.set(this.constructStarGraph(this.nodes(), this.edges()));
  }

  // Add the size of a star to the provided number
  offsetCoordinateToCenter(coord: number, radius: number) {
    return coord + radius;
  }

  constructStarGraph(nodes: GraphNode[], edges: GraphEdge[]): Graph {
    const graph = new Graph([], [])
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      graph.nodes.push(new GraphNode(
        this.offsetCoordinateToCenter(node.x, this.radius),
        this.offsetCoordinateToCenter(node.y, this.radius)
      ));
    }
    for (let i = 0; i < edges.length; i++) {
      const edge = edges[i];
      graph.edges.push(new GraphEdge(edge.node1, edge.node2));
    }
    return graph;
  }
}
