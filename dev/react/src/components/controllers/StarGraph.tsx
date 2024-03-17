import { Graph, GraphEdge, GraphNode } from 'library/graph';
import { addPercentages, toPercentage } from 'library/percentages';

const img = 'images/star_8x8.png';
const radius = 4;
const starWidth = radius * 2;
const starHeight = radius * 2;
const lineOpacity = 1;

interface IStarGraph {
    coords: Array<Array<number | string>>; // x,y coords
    connections: number[][]; // node to node
    width: number;
    height: number;
}

export default function StarGraph(props: IStarGraph) {
    const { coords, connections, width, height } = props;
    const graph = constructStarGraph(coords, connections);
    const stars = [];
    const edges = [];
    const radiusWidthPercent = toPercentage(radius / width);
    const radiusHeightPercent = toPercentage(radius / height);
    for (var node of graph.nodes) {
        stars.push(<image x={node.x} y={node.y} height={starHeight} width={starWidth} href={img} />);
    }
    for (var edge of graph.edges) {
        var line1X = typeof edge.node1.x === 'string' ? addPercentages(edge.node1.x, radiusWidthPercent) : edge.node1.x;
        var line1Y = typeof edge.node1.y === 'string' ? addPercentages(edge.node1.y, radiusHeightPercent) : edge.node1.y;
        var line2X = typeof edge.node2.x === 'string' ? addPercentages(edge.node2.x, radiusWidthPercent) : edge.node2.x;
        var line2Y = typeof edge.node2.y === 'string' ? addPercentages(edge.node2.y, radiusHeightPercent) : edge.node2.y;
        edges.push(<line x1={a(line1X)} y1={a(line1Y)} x2={a(line2X)} y2={a(line2Y)} stroke="white" opacity={lineOpacity} />);
    }

    return (
        <div>
            <svg width={width} height={height}>
                {edges}
                {stars}
            </svg>
        </div>
    );
}

// Add the size of a star to the provided number
function a(num: number | string) {
    if (typeof num === 'string') {
        return num;
    }
    return num + radius;
}

function constructStarGraph(nodes: Array<Array<number | string>>, edges: number[][]): Graph {
    const graphNodes: Array<GraphNode> = [];
    const graphEdges: Array<GraphEdge> = [];
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        graphNodes.push({
            x: a(node[0]),
            y: a(node[1])
        });
    }
    for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        graphEdges.push(new GraphEdge(graphNodes[edge[0]], graphNodes[edge[1]]));
    }
    return new Graph(graphNodes, graphEdges);
}
