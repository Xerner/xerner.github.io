import { Graph, GraphNode, GraphEdge } from 'library/graph';

// class StarLetter {
//     letter: string = "";
//     starCoords: Array<[number, number]> = [];

//     constructor(letter: string, starCoords: Array<[number, number]>) {
//         this.letter = letter;
//         this.starCoords = starCoords;
//     }
// }

// first name starting x positions
var wordHeight = 140;
const firstName = {
    k:  0,
    e1: 150,
    n1: 250,
    n2: 350,
    e2: 450,
    t: 520,
    h: 630,
}



//#region Kenneth stars
const k_stars = [
    new GraphNode(0,   0),
    new GraphNode(11,  75),
    new GraphNode(16,  wordHeight),
    // new GraphNode(16,  "35%"),
    new GraphNode(100, 0),
    new GraphNode(100, wordHeight),
]
// const k_stars = [
//     new GraphNode(firstName["k"],       0),
//     new GraphNode(firstName["k"] + 11,  75),
//     new GraphNode(firstName["k"] + 16,  wordHeight),
//     new GraphNode(firstName["k"] + 100, 0),
//     new GraphNode(firstName["k"] + 100, wordHeight),
// ]
const e1_stars = [
    new GraphNode(firstName["e1"],       wordHeight - 30),
    new GraphNode(firstName["e1"] + 30,  wordHeight - 60),
    new GraphNode(firstName["e1"] + 60,  wordHeight - 30),
    new GraphNode(firstName["e1"] + 10,  wordHeight),
    new GraphNode(firstName["e1"] + 50,  wordHeight),
]
const n1_stars = [
    new GraphNode(firstName["n1"],       wordHeight - 60),
    new GraphNode(firstName["n1"],       wordHeight - 40),
    new GraphNode(firstName["n1"],       wordHeight),
    new GraphNode(firstName["n1"] + 30,  wordHeight - 60),
    new GraphNode(firstName["n1"] + 50,  wordHeight - 50),
    new GraphNode(firstName["n1"] + 60,  wordHeight),

]
const n2_stars = [
    new GraphNode(firstName["n2"],       wordHeight - 60),
    new GraphNode(firstName["n2"],       wordHeight - 40),
    new GraphNode(firstName["n2"],       wordHeight),
    new GraphNode(firstName["n2"] + 30,  wordHeight - 60),
    new GraphNode(firstName["n2"] + 50,  wordHeight - 50),
    new GraphNode(firstName["n2"] + 60,  wordHeight),
]
const e2_stars = [
    new GraphNode(firstName["e2"],       wordHeight - 30),
    new GraphNode(firstName["e2"] + 30,  wordHeight - 60),
    new GraphNode(firstName["e2"] + 60,  wordHeight - 30),
    new GraphNode(firstName["e2"] + 10,  wordHeight),
    new GraphNode(firstName["e2"] + 50,  wordHeight),
]
const t_stars = [
    new GraphNode(firstName["t"],       40),
    new GraphNode(firstName["t"] + 30,  0),
    new GraphNode(firstName["t"] + 33,  43),
    new GraphNode(firstName["t"] + 60,  40),
    new GraphNode(firstName["t"] + 30,  wordHeight - 30),
    new GraphNode(firstName["t"] + 50,  wordHeight),
]
const h_stars = [
    new GraphNode(firstName["h"],       0),
    new GraphNode(firstName["h"] - 10,  wordHeight - 60),
    new GraphNode(firstName["h"],       wordHeight),
    new GraphNode(firstName["h"] + 30,  80),
    new GraphNode(firstName["h"] + 50,  wordHeight),
]
//#endregion

var wordHeight2 = wordHeight + wordHeight + 20;
wordHeight += 50;

//#region Mead stars
const m_stars = [
    new GraphNode(firstName["e1"] - 20 + 30,  wordHeight),
    new GraphNode(firstName["e1"] - 20 + 11,  wordHeight2),
    new GraphNode(firstName["e1"] - 20 + 50,  wordHeight + 75),
    new GraphNode(firstName["e1"] - 20 + 100, wordHeight),
    new GraphNode(firstName["e1"] - 20 + 120, wordHeight2 - 10),
]
const e3_stars = [
    new GraphNode(firstName["n1"] + 20,       wordHeight2 - 30),
    new GraphNode(firstName["n1"] + 20 + 30,  wordHeight2 - 60),
    new GraphNode(firstName["n1"] + 20 + 60,  wordHeight2 - 30),
    new GraphNode(firstName["n1"] + 20 + 10,  wordHeight2),
    new GraphNode(firstName["n1"] + 20 + 50,  wordHeight2),
]
const a_stars = [
    new GraphNode(firstName["n2"] + 20 + 40,  wordHeight2 - 50),
    new GraphNode(firstName["n2"] + 20,       wordHeight2 - 40),
    new GraphNode(firstName["n2"] + 20,       wordHeight2),
    new GraphNode(firstName["n2"] + 20 + 45,  wordHeight2 - 10),
    new GraphNode(firstName["n2"] + 20 + 60,  wordHeight2),
]
const d_stars = [
    new GraphNode(firstName["e2"] + 20,       wordHeight2),
    new GraphNode(firstName["e2"] + 20,       wordHeight2 - 40),
    new GraphNode(firstName["e2"] + 20 + 50,  wordHeight2 - 50),
    new GraphNode(firstName["e2"] + 20 + 60,  wordHeight2),
    new GraphNode(firstName["e2"] + 20 + 60,  wordHeight),
]

const stars = [
    ...k_stars, ...e1_stars, ...n1_stars, ...n2_stars, ...e2_stars, ...t_stars, ...h_stars,
    ...m_stars, ...e3_stars, ...a_stars, ...d_stars
]
//#endregion

//#region edges
const edges = [
    // K
    new GraphEdge(k_stars[0], k_stars[1]),
    new GraphEdge(k_stars[1], k_stars[2]),
    new GraphEdge(k_stars[1], k_stars[3]),
    new GraphEdge(k_stars[1], k_stars[4]),
    // e
    new GraphEdge(e1_stars[0], e1_stars[1]),
    new GraphEdge(e1_stars[0], e1_stars[3]),
    new GraphEdge(e1_stars[1], e1_stars[2]),
    new GraphEdge(e1_stars[2], e1_stars[0]),
    new GraphEdge(e1_stars[3], e1_stars[4]),
    // n
    new GraphEdge(n1_stars[0], n1_stars[1]),
    new GraphEdge(n1_stars[1], n1_stars[2]),
    new GraphEdge(n1_stars[1], n1_stars[3]),
    new GraphEdge(n1_stars[3], n1_stars[4]),
    new GraphEdge(n1_stars[4], n1_stars[5]),
    // n
    new GraphEdge(n2_stars[0], n2_stars[1]),
    new GraphEdge(n2_stars[1], n2_stars[2]),
    new GraphEdge(n2_stars[1], n2_stars[3]),
    new GraphEdge(n2_stars[3], n2_stars[4]),
    new GraphEdge(n2_stars[4], n2_stars[5]),
    // e
    new GraphEdge(e2_stars[0], e2_stars[1]),
    new GraphEdge(e2_stars[0], e2_stars[3]),
    new GraphEdge(e2_stars[1], e2_stars[2]),
    new GraphEdge(e2_stars[2], e2_stars[0]),
    new GraphEdge(e2_stars[3], e2_stars[4]),
    // t
    new GraphEdge(t_stars[0], t_stars[2]),
    new GraphEdge(t_stars[1], t_stars[2]),
    new GraphEdge(t_stars[2], t_stars[3]),
    new GraphEdge(t_stars[2], t_stars[4]),
    new GraphEdge(t_stars[4], t_stars[5]),
    // h
    new GraphEdge(h_stars[0], h_stars[1]),
    new GraphEdge(h_stars[1], h_stars[2]),
    new GraphEdge(h_stars[1], h_stars[3]),
    new GraphEdge(h_stars[3], h_stars[4]),

    // m
    new GraphEdge(m_stars[0], m_stars[1]),
    new GraphEdge(m_stars[0], m_stars[2]),
    new GraphEdge(m_stars[2], m_stars[3]),
    new GraphEdge(m_stars[3], m_stars[4]),
    // e
    new GraphEdge(e3_stars[0], e3_stars[1]),
    new GraphEdge(e3_stars[0], e3_stars[3]),
    new GraphEdge(e3_stars[1], e3_stars[2]),
    new GraphEdge(e3_stars[2], e3_stars[0]),
    new GraphEdge(e3_stars[3], e3_stars[4]),
    // a
    new GraphEdge(a_stars[0], a_stars[1]),
    new GraphEdge(a_stars[1], a_stars[2]),
    new GraphEdge(a_stars[2], a_stars[3]),
    new GraphEdge(a_stars[3], a_stars[4]),
    new GraphEdge(a_stars[3], a_stars[0]),
    // d
    new GraphEdge(d_stars[0], d_stars[1]),
    new GraphEdge(d_stars[1], d_stars[2]),
    new GraphEdge(d_stars[2], d_stars[3]),
    new GraphEdge(d_stars[2], d_stars[4]),
    new GraphEdge(d_stars[3], d_stars[0]),
]
//#endregion

export default new Graph(stars, edges)
