import { Grid } from '@material-ui/core';
import { Forward as ForwardIcon } from '@material-ui/icons';
import { isMobile } from 'library/isMobile';
import alphabet from 'graphics/bitmaps/alphabetMap_small';
import { useEffect, useState } from 'react';
import PixelBitmap from 'components/controllers/PixelBitmap';
import Delayable from './Delayable';

interface MyNameProps {
	playAnimation: boolean;
	wait: number;
}

const starImg = "images/star_12x12.png"

const animations = [
    [
		'animate__animated animate__fadeInRightBig animate__fast',
		// 'animate__animated animate__fadeInDownBig animate__slow'
	],
	[
		'animate__animated animate__fadeInRightBig animate__slow',
		'animate__animated animate__fadeInLeftBig animate__slow',
		'animate__animated animate__fadeInUpBig animate__slow',
		'animate__animated animate__fadeInDownBig animate__slow'
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
	const animationClasses = animations[0];
	const [rowDelay] = useState(playAnimation ? 1 : 0);
	const [rowDelayMaxIncrement] = useState(rowDelay * 3);
	const _isMobile = isMobile();

	var colorMap: { [key: number]: string } = {
		0: '#00000000', // transparent
		1: '#dddddd', //theme.palette.type === "dark" ? theme.palette.primary.main : theme.palette.primary.light,
	};

	// useEffect(() => {
	// 	if (!playAnimation) {
	// 		// setTimeout(() => {
	// 		// 	setRowDelay(0);
	// 		// }, 2000);
	// 	}
	// 	document.body.style.overflowX = 'hidden';
	// 	setTimeout(() => (document.body.style.overflowX = 'hidden'), wait * 2);
	// }, [playAnimation, wait]);

	var firstName = ['K', 'e', 'n', 'n', 'e', 't', 'h'];
	var lastName = ['M', 'e', 'a', 'd'];

	const pixelSize = _isMobile ? '0.75%' : '0.75%';
    const spacing = _isMobile ? 6 : 8;
    
	return (
		<div className="name-container">
			<Delayable wait={wait}>
				<div className="animate__animated animate__fadeIn animate__slower">
					<Grid container justifyContent="center" alignItems="flex-end" spacing={spacing} style={{ marginBottom: 12 }}>
						{firstName.map((letter, index) => (
							<Grid item key={index} className="rise-anim">
								<PixelBitmap
									bitmap={alphabet[letter]}
									pixelSize={pixelSize}
									colorMap={colorMap}
									animationClasses={animationClasses}
									rowDelay={rowDelay}
									rowDelayMaxIncrement={rowDelayMaxIncrement}
									randomDelay={true}
                                    img={starImg}
								/>
							</Grid>
						))}
					</Grid>
					<Grid container justifyContent="center" alignItems="flex-end" spacing={spacing}>
						{lastName.map((letter, index) => (
							<Grid item key={index} className="rise-anim">
								<PixelBitmap
									bitmap={alphabet[letter]}
									pixelSize={pixelSize}
									colorMap={colorMap}
									animationClasses={animationClasses}
									rowDelay={rowDelay}
									rowDelayMaxIncrement={rowDelayMaxIncrement}
									randomDelay={true}
                                    img={starImg}
								/>
							</Grid>
						))}
					</Grid>
					{/* <PixelSentence
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
					/> */}
				</div>
				<Delayable wait={wait + 2000}>
					<div
						style={{
							position: 'absolute',
							top: window.innerHeight * 0.8,
							textAlign: 'center',
							zIndex: 10,
							color: 'white',
							fontSize: '1.5rem',
							fontWeight: 'bold'
						}}
						className="animate__animated animate__fadeInUp"
					>
						<div>Look Below</div>
						<div style={{ transform: 'rotate(90deg)' }}>
							<ForwardIcon style={{ color: 'white', fontSize: '2rem' }} />
						</div>
					</div>
				</Delayable>
			</Delayable>
		</div>
	);
}
