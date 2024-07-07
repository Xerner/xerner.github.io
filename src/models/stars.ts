import { Graph, GraphEdge, GraphEdgeType, GraphNode, GraphNodeType } from "./graph";

export const StarSource = {
  Star8x8: 'assets/images/star_8x8.png',
  Star12x12: 'assets/images/star_12x12.png'
};
export const StarSources = Object.values(StarSource);

export type FadeType = 0 | 1 | 2 | 3;
export const FadeTypes: Record<FadeType, string> = {
  0: '',
  1: 'fadeIn-1',
  2: 'fadeIn-2',
  3: 'fadeIn-3',
};

export class StarLetter {
  graph = new Graph();

  constructor(
    nodes: GraphNodeType[] = [],
    edges: GraphEdgeType[] = []
  ) {
      var graphNodes: GraphNode[] = nodes.map(node => GraphNode.convert(node));
      this.graph.nodes = graphNodes;
      var graphEdges: GraphEdge[] = edges.map(edge => GraphEdge.convert(graphNodes, edge));
      this.graph.edges = graphEdges;
  }
}
