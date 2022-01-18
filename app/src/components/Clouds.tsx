import { isMobile } from 'functions/isMobile';
import { useEffect, useState, useContext, createContext } from 'react';

const FORE_CLOUD = 100;
const BACK_CLOUD = 90;

const DimsContext = createContext({ width: 0, height: 0 });

interface ICloudDim {
	width: number;
	height: number;
}

const cloudDims = [
	{ width: 1147, height: 608 },
	{ width: 1192, height: 630 },
	{ width: 899, height: 517 },
	{ width: 856, height: 383 }
];
// cloud 1 = 1147 x 608


export default function Clouds() {
	const [dims, setDims] = useState({ width: 0, height: 0 });
	
	useEffect(() => {
		setDims({ width: window.innerWidth, height: window.innerHeight });
	}, []);
	var temp = cloudDims.reduce((prevCloudDim, curCloudDim) =>
		prevCloudDim.height > curCloudDim.height ? prevCloudDim : curCloudDim
	);
	const largestCloudHeight = (temp.height / temp.width) * (dims.width * 0.25)

	return (
		<div style={{ position: 'relative', top: - largestCloudHeight / 2, overflowX: 'clip' }}>
			<DimsContext.Provider value={dims}>
				{/* group 1 */}
				<Cloud cloudIndex={1} left={-dims.width * 0.025} top={0} />
				<Cloud cloudIndex={3} left={dims.width * 0.12} top={0} size={0.75} zIndex={FORE_CLOUD + 1} />

				{/* group 2 */}
				<Cloud cloudIndex={2} left={dims.width * 0.31} top={dims.height * 0.05} size={0.7} zIndex={FORE_CLOUD - 1} />
				<Cloud cloudIndex={3} left={dims.width * 0.4} top={0} />
				<Cloud cloudIndex={2} left={dims.width * 0.55} top={dims.height * 0.05} size={0.7} zIndex={FORE_CLOUD - 1} />

				{/* group 3 */}
				<Cloud cloudIndex={2} left={dims.width * 0.7} top={0} />
				<Cloud cloudIndex={1} left={dims.width * 0.85} top={dims.height * 0.05} size={0.5} zIndex={FORE_CLOUD - 1} />

				{/* end cloud */}
				<Cloud cloudIndex={1} left={dims.width * 0.975} top={0} />

				{/* Background clouds */}
				<Cloud cloudIndex={4} left={-dims.width * 0.05} top={0} size={0.45} />
				<Cloud cloudIndex={4} left={dims.width * 0.22} top={0} size={0.45} />
				<Cloud cloudIndex={4} left={dims.width * 0.45} top={0} size={0.3} />
				<Cloud cloudIndex={4} left={dims.width * 0.7} top={dims.height * 0.05} size={0.25} />

				{/* end cloud */}
				<Cloud cloudIndex={4} left={dims.width * 0.95} top={0} size={0.45} />
			</DimsContext.Provider>
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
	const windowDims = useContext(DimsContext);

	const size = props.size ? props.size : 1;
	var zIndex;
	if (!props.zIndex) {
		if (props.cloudIndex === 4) {
			zIndex = BACK_CLOUD;
		} else {
			zIndex = FORE_CLOUD;
		}
	} else {
		zIndex = props.zIndex;
	}
	const thisCloudDims = cloudDims[props.cloudIndex - 1];
	return (
		<img
			src={`images/clouds/cloud${props.cloudIndex}.png`}
			alt="cloud"
			style={{ position: 'absolute', left: props.left, top: props.top, zIndex: zIndex }}
			width={windowDims.width * 0.25 * size}
			height={(thisCloudDims.height / thisCloudDims.width) * (windowDims.width * 0.25) * size}
		/>
	);
}
