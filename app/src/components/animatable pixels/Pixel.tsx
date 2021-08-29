import Delayable from 'components/Delayable';
import React from 'react';

export interface PixelProps {
	x: number;
	y: number;
	pixelSize: number;
	fill: string;
	animationClasses?: string;
	wait?: number;
	// image?: IPixelImageProps;
}

// export interface IPixelImageProps {
//   src: string;
//   alt?: string;
//   // title?: string;
// }

export default function Pixel(props: PixelProps) {
	const { x, y, pixelSize, fill, animationClasses, wait } = props;

	var ref = React.createRef<HTMLDivElement>();

	return (
		<Delayable wait={wait !== undefined ? wait : 0}>
			<div
				ref={ref}
				onAnimationEnd={
					animationClasses
						? () => {
								if (ref.current) ref.current.className = 'pixel';
						  }
						: undefined
				}
				style={{
					width: pixelSize, //(y * pixelSize).toString() + "rem",
					height: pixelSize, //(x * pixelSize).toString() + "rem",
					backgroundColor: fill,
					position: 'absolute',
					paddingTop: y !== 0 ? -pixelSize : 0,
					left: x * pixelSize, //(x * pixelSize).toString() + "rem",
					top: y * pixelSize //(y * pixelSize).toString() + "rem",
				}}
				className={animationClasses+ " pixel"}
			/>
		</Delayable>
	);
}
