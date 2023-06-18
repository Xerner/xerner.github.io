import { clamp } from "functions/clamp";
import { useEffect, useRef, useState } from "react";
import { denormalize } from "functions/normalize";

// resolution of each clouds source image
const CLOUD_DIMS = [
	{ width: 1147, height: 608 },
	{ width: 1192, height: 630 },
	{ width: 899, height: 517 },
	{ width: 856, height: 383 }
]

const CLOUD_RATIOS = CLOUD_DIMS.map(cloudDim => cloudDim.height / cloudDim.width)

const CLOUD_SPEEDS = {
    SLOW: 1 / 400,
    MEDIUM: 2 / 400,
    FAST: 3 / 400,
}

const CLOUD_VIEWWIDTH_MULTIPLIER = 25
const UPDATE_INTERVAL_MS = 1000 / 60 // milliseconds
const UPDATE_INTERVAL_S = UPDATE_INTERVAL_MS / 1000

export const FORE_CLOUD_Z = 100
export const BACK_CLOUD_Z = 90

const LARGEST_CLOUD_RATIO = Math.max(...CLOUD_RATIOS)
const LARGEST_CLOUD_HEIGHT = LARGEST_CLOUD_RATIO * 50
export const TOP_OFFSET = `-${LARGEST_CLOUD_HEIGHT / 2}vh`

interface ICloud {
    id?: string;
	cloudIndex: number;
	initialLeft: number;
	top: number;
	size?: number;
	distance?: number;
}

export default function Cloud(props: ICloud) {
    const { id, cloudIndex, initialLeft, top, distance, size } = props;
    const [left, setLeft] = useState(initialLeft)
    const _distance = useRef(distance ? clamp(distance, 0.1, Number.MAX_SAFE_INTEGER) : 1)
    const _size = useRef(calcSize(_distance.current, size !== undefined ? size : 1))
    
    const cloudViewwidth = _size.current * CLOUD_VIEWWIDTH_MULTIPLIER

    useEffect(() => {
        window.setTimeout(() => {
            var newLeft = calcCloudLeftAfterMove(left, _distance.current, cloudViewwidth / 100, UPDATE_INTERVAL_S, CLOUD_SPEEDS.FAST)
            setLeft(newLeft)
        }, UPDATE_INTERVAL_MS)
        return () => {}
    }, [left, _distance, cloudViewwidth])

	return (
		<img
            id={id}
			src={`images/clouds/cloud${cloudIndex}.png`}
			alt="cloud"
			style={{
				position: 'absolute',
				left: `${left * 100}vw`,
				top: `${top * 100}vh`,
				zIndex: denormalize(_distance.current, BACK_CLOUD_Z, FORE_CLOUD_Z, true),
				width: `${cloudViewwidth}vw`,
				height: 'auto'
			}}
		/>
	);
}

function calcSize(distance: number, size: number) {
    return distance * size
}

function calcCloudLeftAfterMove(left: number, distance: number, cloudViewwidth: number, deltaTime: number, speed?: number) {
    // Initialize speed if not provided
    var _speed = speed !== undefined ? speed : CLOUD_SPEEDS.MEDIUM
    _speed = _speed * distance * deltaTime
    var newLeft = left + _speed
    if (newLeft > 1) {
        return -cloudViewwidth
    }
    
    return newLeft
}
