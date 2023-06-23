import Delayable from 'components/controllers/Delayable';
import { clamp } from 'functions/clamp';
import { randomInt } from 'functions/randomInt';

interface IStar {
	left: number;
	top: number;
	wait: number;
}

const starSources = [
    'images/star_8x8.png', 
    'images/star_12x12.png'
];

const fadeInClasses = [
    'fadeIn-1', 
    'fadeIn-2', 
    'fadeIn-3', 
];

export default function Star(props: IStar) {
	const { left, top, wait } = props;

	const starSource = starSources[Math.random() > 0.3 ? 0 : 1];
	const fadeInClass = fadeInClasses[randomInt(3)];


	return (
		<Delayable wait={wait}>
			<img
				style={{ position: 'absolute', left: `${left}%`, top: `${top}%` }}
				src={starSource}
				alt="star"
				className={`star animate__animated animate__slower ${fadeInClass}`}
				title="ooooo~ a star"
			/>
		</Delayable>
	);
}
