import { useMemo } from 'react';
import { ReactElement } from 'react';
import Star from './Star';

interface StarsProps {
	numberOfStars: number;
	maxWait: number;
	minWait: number;
}

export default function Stars(props: StarsProps) {
	const { numberOfStars, maxWait, minWait } = props;
	const deltaWait = maxWait - minWait;

	const stars: ReactElement[] = useMemo(() => {
		var _stars: ReactElement[] = [];

		for (let i = 0; i < numberOfStars; i++) {
			var randomLeft = Math.random() * 100; //Math.floor( * window.innerWidth-32); //window.innerWidth
			var randomTop = Math.random() * 100; //Math.floor( * window.innerHeight); //window.innerHeight
			var randomWait = Math.floor(Math.random() * deltaWait + minWait);
			_stars.push(
                <Star key={_stars.length} left={randomLeft} top={randomTop} wait={randomWait} />
            );
		}
		return _stars;
	}, [deltaWait, minWait, numberOfStars]);

	return (
		<div>{stars}</div>
	);
}

// function generateRandomBitmap(rowSize: number, colSize: number): boolean[][] {
// 	const array: boolean[][] = [];
// 	for (let i = 0; i < rowSize; i++) {
// 		array[i] = [];
// 		const row = array[i];
// 		for (let j = 0; j < colSize; j++) {
// 			row[j] = Math.random() > 0.9;
// 		}
// 	}
// 	return array;
// }

// function generateFilledBitmap(rowSize: number, colSize: number): boolean[][] {
// 	const array: boolean[][] = [];
// 	for (let i = 0; i < rowSize; i++) {
// 		array[i] = [];
// 		const row = array[i];
// 		for (let j = 0; j < colSize; j++) {
// 			row[j] = true;
// 		}
// 	}
// 	return array;
// }
