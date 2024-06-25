import { percentToNumber, toPercentageString } from "../library/math";

export class Graph {
  nodes: GraphNode[];
  edges: GraphEdge[];

  constructor(nodes: GraphNode[] = [], edges: GraphEdge[] = []) {
    this.nodes = nodes;
    this.edges = edges;
  }
}

export type GraphNodeType = GraphNode | [number, number] | [string, string];
export class GraphNode {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  static convert(graphNodeType: GraphNodeType): GraphNode {
    if (graphNodeType instanceof GraphNode) {
      return graphNodeType;
    }
    if (typeof graphNodeType[0] === 'number' && typeof graphNodeType[1] === 'number') {
      return new GraphNode(graphNodeType[0], graphNodeType[1]);
    }
    return new GraphNode(percentToNumber(graphNodeType[0] as string), percentToNumber(graphNodeType[1] as string));
  }
}

export type GraphEdgeType = GraphEdge | [number, number];
export class GraphEdge {
  node1: GraphNode;
  node2: GraphNode;

  constructor(node1: GraphNode, node2: GraphNode) {
    this.node1 = node1;
    this.node2 = node2;
  }

  static convert(nodes: GraphNode[], graphEdgeType: GraphEdgeType): GraphEdge {
    if (graphEdgeType instanceof GraphEdge) {
      return graphEdgeType;
    }
    return new GraphEdge(nodes[graphEdgeType[0]], GraphNode.convert(nodes[graphEdgeType[1]]));
  }
}
