import Delayable from 'components/controllers/Delayable';
import { randomInt } from 'library/randomInt';

interface IStar {
	left: number;
	top: number;
	wait: number;
    noFade?: boolean;
    fade?: number;
    transform?: string;
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
	const { left, top, wait, noFade, fade, transform } = props;

	const starSource = starSources[Math.random() > 0.3 ? 0 : 1];
    var hasAutoFade = !noFade && fade === undefined
    var fadeInClass: string = "";
    if (hasAutoFade) {
        fadeInClass = fadeInClasses[randomInt(3)];
    } else if (fade !== undefined) {
        fadeInClass = fadeInClasses[fade];
    }

	return (
		<Delayable wait={wait}>
			<img
				style={{ position: 'absolute', left: `${left}%`, top: `${top}%`, transform: transform }}
				src={starSource}
				alt="star"
				className={`star animate__animated animate__slower ${fadeInClass}`}
				title="ooooo~ a star"
			/>
		</Delayable>
	);
}
