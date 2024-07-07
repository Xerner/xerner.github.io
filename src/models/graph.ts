import { strToNumber, toPercentageString } from "../library/math";

export class Graph {
  nodes: GraphNode[];
  edges: GraphEdge[];

  constructor(nodes: GraphNode[] = [], edges: GraphEdge[] = []) {
    this.nodes = nodes;
    this.edges = edges;
  }
}

// TODO: replace number[][] type with FixedArray from ColorSlicer
export type GraphNodeType = GraphNode | [number, number, boolean] | [string, string];
export class GraphNode {
  x: Coordinate;
  y: Coordinate;

  constructor(x = 0, y = 0, xIsPercentage = false, yIsPercentage = false) {
    this.x = new Coordinate(x, xIsPercentage);
    this.y = new Coordinate(y, yIsPercentage);;
  }

  static convert(graphNodeType: GraphNodeType): GraphNode {
    if (graphNodeType instanceof GraphNode) {
      return graphNodeType;
    }
    if (typeof graphNodeType[0] === 'number' && typeof graphNodeType[1] === 'number') {
      return new GraphNode(graphNodeType[0], graphNodeType[1]);
    }
    var x = strToNumber(graphNodeType[0] as string);
    var y = strToNumber(graphNodeType[1] as string);
    var xIsPercentage = (graphNodeType[0] as string).indexOf("%") != -1;
    var yIsPercentage = (graphNodeType[1] as string).indexOf("%") != -1;
    return new GraphNode(x, y, xIsPercentage, yIsPercentage);
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

export class Coordinate {
  constructor(public coordinate: number, public isPercentage: boolean) {
  }
}
