import StarGraph from 'components/controllers/StarGraph';

export class StarLetter {
    aspectRatio: number;
    coords: Array<Array<number | string>>;
    connections: number[][];
    // aspectRatio: number;

    constructor(aspectRatio: number = 1, coords: Array<Array<number | string>> = [], connections: number[][] = []) {
        this.aspectRatio = aspectRatio;
        this.coords = coords;
        this.connections = connections;
        // this.aspectRatio = 1;
    }
}

// based on 100x100 canvas
var stars = {
    K: new StarLetter(
        1/1,
        [
            ['5%', '5%'],
            ['8%', '50%'],
            ['5%', '95%'],
            ['65%', '5%'],
            ['70%', '90%']
        ],
        [
            [0, 1],
            [1, 2],
            [1, 3],
            [1, 4]
        ]
    ),
    e: new StarLetter(
        1/1,
        [
            ['5%', '50%'],
            ['50%', '5%'],
            ['95%', '50%'],
            ['30%', '95%'],
            ['80%', '90%']
        ],
        [
            [0, 1],
            [1, 2],
            [0, 2],
            [0, 3],
            [3, 4]
        ]
    ),
    n: new StarLetter(
        1/1,
        [
            ['10%', '5%'],
            ['7.5%', '25%'],
            ['5%', '95%'],
            ['35%', '5%'],
            ['75%', '25%'],
            ['95%', '95%']
        ],
        [
            [0, 1],
            [1, 2],
            [1, 3],
            [3, 4],
            [4, 5],
        ]
    ),
    t: new StarLetter(
        1/2,
        [
            ['50%', '5%'],
            ['55%', '75%'],
            ['65%', '95%'],
            ['15%', '27.5%'],
            ['85%', '22.5%'],
        ],
        [
            [0, 1],
            [1, 2],
            [1, 2],
            [3, 4],
        ]
    ),
    h: new StarLetter(
        1/2,
        [
            ['25%', '5%'],
            ['55%', '75%'],
            ['65%', '95%'],
            ['35%', '27.5%'],
            ['65%', '22.5%'],
        ],
        [
            [0, 1],
            [1, 2],
            [1, 2],
            [3, 4],
        ]
    )
};

export function K() {
    return <StarGraph width={200} height={200} coords={stars['K'].coords} connections={stars['K'].connections} />;
}

export function E() {
    return <StarGraph width={200} height={200} coords={stars['e'].coords} connections={stars['e'].connections} />;
}

export function N() {
    return <StarGraph width={200} height={200} coords={stars['n'].coords} connections={stars['n'].connections} />;
}

export function T() {
    return <StarGraph width={100} height={200} coords={stars['t'].coords} connections={stars['t'].connections} />;
}

export function H() {
    return <StarGraph width={200} height={200} coords={stars['h'].coords} connections={stars['h'].connections} />;
}

