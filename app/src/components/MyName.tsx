import { isMobile } from 'functions/isMobile';
import alphabet from 'graphics/bitmaps/alphabetMap';
import { useEffect, useState } from 'react';
import PixelSentence from './animatable pixels/PixelSentence';
import Delayable from './Delayable';

interface MyNameProps {
	playAnimation: boolean;
	wait: number;
}

const animations = [
	[
		'animate__animated animate__fadeInRight animate__slower',
		'animate__animated animate__fadeInLeft animate__slower',
		'animate__animated animate__fadeInUp animate__slower',
		'animate__animated animate__fadeInDown animate__slower'
	],
	[
		'animate__animated animate__backInDown animate__slower',
		'animate__animated animate__backInLeft animate__slower',
		'animate__animated animate__backInRight animate__slower',
		'animate__animated animate__backInUp animate__slower'
	],
	['animate__animated animate__backInDown animate__slow'],
	['animate__animated animate__flash animate__faster'],
	['animate__animated animate__heartBeat animate__slower'],
	['animate__animated animate__fadeInTopLeft '],
	['animate__animated animate__jello animate__slower']
];

export default function MyName(props: MyNameProps) {
	const { playAnimation, wait } = props;
	const [animationClasses] = useState(playAnimation ? animations[4] : []);
	const [rowDelay, setRowDelay] = useState(playAnimation ? 1 : 0);
	const [rowDelayMaxIncrement] = useState(rowDelay * 0.1);

	var colorMap: { [key: number]: string } = {
		0: '#00000000',
		1: '#dddddd', //theme.palette.type === "dark" ? theme.palette.primary.main : theme.palette.primary.light,
		2: '#444444' //theme.palette.type === "dark" ? theme.palette.primary.main : theme.palette.primary.light,
	};

	useEffect(() => {
		if (!playAnimation) {
			setTimeout(() => {
				setRowDelay(0);
			}, 2000);
		}
	}, [playAnimation]);

	const isMobile_ = isMobile();
	const pixelSize = isMobile_ ? 3 : 10;
	const wordSpacing_ = isMobile_ ? 2 : 10;
	const letterSpacing_ = isMobile_ ? 1 : 2;

	return (
		<div
			style={{
				height: window.innerHeight,
				width: '100%',
				position: 'absolute',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				zIndex: 10,
				padding: 128
			}}
		>
			<Delayable wait={wait}>
				<div className="animate__animated animate__fadeIn animate__slower">
					<PixelSentence
						pixelMap={alphabet}
						sentence="Kenneth Mead"
						wordSpacing={wordSpacing_}
						letterSpacing={letterSpacing_}
						colorMap={colorMap}
						pixelSize={pixelSize}
						animationClasses={animationClasses}
						rowDelay={rowDelay}
						rowDelayMaxIncrement={rowDelayMaxIncrement}
						random={false}
					/>
				</div>
			</Delayable>
		</div>
	);
}
