import { useEffect, useState, useContext, createContext } from 'react';

const FORE_CLOUD = 100;
const BACK_CLOUD = 90;

const DimsContext = createContext({ width: 0, height: 0 });

// resolution of each clouds source image
const cloudDims = [
	{ width: 1147, height: 608 },
	{ width: 1192, height: 630 },
	{ width: 899, height: 517 },
	{ width: 856, height: 383 }
];
// cloud 1 = 1147 x 608

export default function Clouds() {
	// const [dims, setDims] = useState({ width: 0, height: 0 });

	// useEffect(() => {
	// 	setDims({ width: window.innerWidth, height: window.innerHeight });
	// }, []);

	var _largestCloudHeight = cloudDims.reduce((prevCloudDim, curCloudDim) =>
		prevCloudDim.height > curCloudDim.height ? prevCloudDim : curCloudDim
	);
	var cloudRatio = _largestCloudHeight.height / _largestCloudHeight.width;
	const largestCloudHeight = cloudRatio * 25;
	const largestCloudHeightVH = `-${largestCloudHeight / 2}vh`;

	return (
		<div style={{ position: 'relative', top: largestCloudHeightVH, overflowX: 'clip' }}>
			{/* <DimsContext.Provider value={dims}> */}
			{/* group 1 */}
			<Cloud cloudIndex={1} left={-0.025} top={0} />
			<Cloud cloudIndex={3} left={0.12} top={0} size={0.75} zIndex={FORE_CLOUD + 1} />

			{/* group 2 */}
			<Cloud cloudIndex={2} left={0.31} top={0.05} size={0.7} zIndex={FORE_CLOUD - 1} />
			<Cloud cloudIndex={3} left={0.4} top={0} />
			<Cloud cloudIndex={2} left={0.55} top={0.05} size={0.7} zIndex={FORE_CLOUD - 1} />

			{/* group 3 */}
			<Cloud cloudIndex={2} left={0.7} top={0} />
			<Cloud cloudIndex={1} left={0.85} top={0.05} size={0.5} zIndex={FORE_CLOUD - 1} />

			{/* end cloud */}
			<Cloud cloudIndex={1} left={0.975} top={0} />

			{/* Background clouds */}
			<Cloud cloudIndex={4} left={-0.05} top={0} size={0.45} />
			<Cloud cloudIndex={4} left={0.22} top={0} size={0.45} />
			<Cloud cloudIndex={4} left={0.45} top={0} size={0.3} />
			<Cloud cloudIndex={4} left={0.7} top={0.05} size={0.25} />

			{/* end cloud */}
			<Cloud cloudIndex={4} left={0.95} top={0} size={0.45} />

			{/* group 1
				<Cloud cloudIndex={1} left={-dims.width * 0.025} top={0} />
				<Cloud cloudIndex={3} left={dims.width * 0.12} top={0} size={0.75} zIndex={FORE_CLOUD + 1} />

				<Cloud cloudIndex={2} left={dims.width * 0.31} top={dims.height * 0.05} size={0.7} zIndex={FORE_CLOUD - 1} />
				<Cloud cloudIndex={3} left={dims.width * 0.4} top={0} />
				<Cloud cloudIndex={2} left={dims.width * 0.55} top={dims.height * 0.05} size={0.7} zIndex={FORE_CLOUD - 1} />

				<Cloud cloudIndex={2} left={dims.width * 0.7} top={0} />
				<Cloud cloudIndex={1} left={dims.width * 0.85} top={dims.height * 0.05} size={0.5} zIndex={FORE_CLOUD - 1} />

				<Cloud cloudIndex={1} left={dims.width * 0.975} top={0} />

				<Cloud cloudIndex={4} left={-dims.width * 0.05} top={0} size={0.45} />
				<Cloud cloudIndex={4} left={dims.width * 0.22} top={0} size={0.45} />
				<Cloud cloudIndex={4} left={dims.width * 0.45} top={0} size={0.3} />
				<Cloud cloudIndex={4} left={dims.width * 0.7} top={dims.height * 0.05} size={0.25} />

				<Cloud cloudIndex={4} left={dims.width * 0.95} top={0} size={0.45} /> */}
			{/* </DimsContext.Provider> */}
		</div>
	);
}

interface ICloud {
	cloudIndex: number;
	left: number;
	top: number;
	size?: number;
	zIndex?: number;
}

function Cloud(props: ICloud) {
	const { left, top, cloudIndex, zIndex, size } = props;
	// const windowDims = useContext(DimsContext);

	const _size = size ? size : 1;
	var _zIndex;
	_zIndex = calcCloudZIndex(cloudIndex, zIndex);
	// const thisCloudDims = cloudDims[props.cloudIndex - 1];

	return (
		<img
			src={`images/clouds/cloud${cloudIndex}.png`}
			alt="cloud"
			style={{ position: 'absolute', 
				left: `${left*100}vw`, 
				top: `${top*100}vh`, 
				zIndex: _zIndex, 
				width: `${_size * 25}vw`, 
				height: 'auto' }}
			// width={windowDims.width * 0.25 * _size}
			// height={(thisCloudDims.height / thisCloudDims.width) * (windowDims.width * 0.25) * _size}
		/>
	);
}

function calcCloudZIndex(cloudIndex: number, zIndex?: number) {
	var newZIndex;
	if (!zIndex) {
		if (cloudIndex === 4) {
			newZIndex = BACK_CLOUD;
		} else {
			newZIndex = FORE_CLOUD;
		}
	} else {
		newZIndex = zIndex;
	}
	return newZIndex;
}
