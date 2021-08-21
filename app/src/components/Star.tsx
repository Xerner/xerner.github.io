import Delayable from './Delayable';

interface IStar {
	left: number;
	top: number;
	wait: number;
}

const starSources = ['images/star_8x8.png', 'images/star_12x12.png'];

export default function Star(props: IStar) {
	const { left, top, wait } = props;

	const starSource = starSources[Math.random() > 0.3 ? 0 : 1];

	return (
		<Delayable wait={wait}>
				<img
					style={{ position: 'absolute', left: left, top: top }}
					src={starSource}
					alt="star"
					className="animate__animated animate__fadeIn animate__slower"
					title="ooooo~ a star"
				/>
		</Delayable>
	);
}
