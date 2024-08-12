import { StarLetter } from "./stars";

export type StarLetters = 'K' | 'e' | 'n' | 't' | 'h' | 'M' | 'e' | 'a' | 'd';

// based on 100x100 canvas
export const STAR_LETTER_GRAPHS: Record<StarLetters, StarLetter> = {
  K: new StarLetter(
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
    [
      ['25%', '5%'],
      ['15%', '65%'],
      ['5%', '95%'],
      ['65%', '65%'],
      ['75%', '90%'],
    ],
    [
      [0, 1],
      [1, 2],
      [1, 3],
      [3, 4],
    ]
  ),
  M: new StarLetter(
    [
      ['5%', '95%'],
      ['10%', '10%'],
      ['50%', '66%'],
      ['90%', '5%'],
      ['95%', '95%'],
    ],
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ]
  ),
  a: new StarLetter([
    ['5%', '50%'],
    ['28%', '5%'],
    ['80%', '50%'],
    ['30%', '95%'],
    ['70%', '90%'],
    ['95%', '95%'],
    ['60%', '8%'],
  ],
    [
      [0, 1],
      [1, 6],
      [0, 3],
      [3, 4],
      [2, 4],
      [2, 5],
      [6, 2]
    ]),
  d: new StarLetter([
    ['95%', '5%'],
    ['92%', '25%'],
    ['90%', '55%'],
    ['15%', '60%'],
    ['10%', '90%'],
    ['95%', '95%'],
  ],
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 2],
  ]),
};