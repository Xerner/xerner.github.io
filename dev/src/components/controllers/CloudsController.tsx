const FORE_CLOUD = 100;
const BACK_CLOUD = 90;

// resolution of each clouds source image
const cloudDims = [
	{ width: 1147, height: 608 },
	{ width: 1192, height: 630 },
	{ width: 899, height: 517 },
	{ width: 856, height: 383 }
];
// cloud 1 = 1147 x 608

export default function CloudsController({ id }: { id: string }) {
	var _largestCloudHeight = cloudDims.reduce((prevCloudDim, curCloudDim) =>
		prevCloudDim.height > curCloudDim.height ? prevCloudDim : curCloudDim
	);
	var cloudRatio = _largestCloudHeight.height / _largestCloudHeight.width;
	const largestCloudHeight = cloudRatio * 25;
	const topOffset = `-${largestCloudHeight / 2}vh`;

	return (
		<div id={id} className="clouds" style={{ top: topOffset }}>
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

	const _size = size ? size : 1;
	var _zIndex;
	_zIndex = calcCloudZIndex(cloudIndex, zIndex);

	return (
		<img
			src={`images/clouds/cloud${cloudIndex}.png`}
			alt="cloud"
			style={{
				position: 'absolute',
				left: `${left * 100}vw`,
				top: `${top * 100}vh`,
				zIndex: _zIndex,
				width: `${_size * 25}vw`,
				height: 'auto'
			}}
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
