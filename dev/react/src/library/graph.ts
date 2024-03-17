
export class Graph {
    nodes: GraphNode[];
    edges: GraphEdge[];

    constructor(nodes: GraphNode[] = [], edges: GraphEdge[] = []) {
        this.nodes = nodes;
        this.edges = edges;
    }
}

export class GraphNode {
    x: number | string;
    y: number | string;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

export class GraphEdge {
    node1: GraphNode;
    node2: GraphNode;

    constructor(node1: GraphNode, node2: GraphNode) {
        this.node1 = node1;
        this.node2 = node2;
    }
}
