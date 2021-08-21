// import { CSSProperties } from 'react';
import { useMemo } from 'react';
import { ReactElement } from 'react';
// import ElementArray from './animatable elements/ElementArray';
import Star from './Star';

interface StarsProps {
	maxWait: number;
	minWait: number;
	// style?: CSSProperties;
}

export default function Stars(props: StarsProps) {
	const { maxWait, minWait } = props;
	const deltaWait = maxWait - minWait;
	// const animationClasses = playAnimation ? animations[1] : [];
	// const rowDelay = playAnimation ? 1 : 0;

	// const rowSize = 50;
	// const columnSize = 50;
	// const rows = 50;
	// const columns = 50;

	const stars: ReactElement[] = useMemo(() => {
		var _stars: ReactElement[] = [];

		for (let i = 0; i < 300; i++) {
			var randomLeft = Math.floor(Math.random() * window.innerWidth-32); //window.innerWidth
			var randomTop = Math.floor(Math.random() * window.innerHeight); //window.innerHeight
			var randomWait = Math.floor(Math.random() * deltaWait + minWait);
			_stars.push(
				<Star key={_stars.length} left={randomLeft} top={randomTop} wait={randomWait}/>
			);
		}
		return _stars;
	}, [deltaWait, minWait]);

	return (
		<div>
			{stars}
		</div>
		// <ElementArray
		// 	element={<img src="images/star_8x8.png" alt="star" style={{objectFit: "fill"}} />}
		// 	rowSize={rowSize}
		// 	columnSize={columnSize}
		// 	bitmap={generateRandomBitmap(rows, columns)}
		// 	// bitmap={generateFilledBitmap(rows, columns)}
		// 	itemClassName={animationClasses}
		// 	isDelayRandom={true}
		// 	rowDelay={1}
		// 	rowDelayMaxIncrement={rowDelayMaxIncrement}
		// />
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
