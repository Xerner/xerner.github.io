// resolution of each clouds source image
export const CLOUD_DIMS = [
  { width: 1147, height: 608 },
  { width: 1192, height: 630 },
  { width: 899, height: 517 },
  { width: 856, height: 383 }
]

export const CLOUD_IMG_SOURCE_URLS = {
  1: "assets/images/clouds/cloud1.png",
  2: "assets/images/clouds/cloud2.png",
  3: "assets/images/clouds/cloud3.png",
  4: "assets/images/clouds/cloud4.png",
}

export const CLOUD_RATIOS = CLOUD_DIMS.map(cloudDim => cloudDim.height / cloudDim.width)

export const CLOUD_SPEEDS = {
  SLOW: 1 / 400,
  MEDIUM: 2 / 400,
  FAST: 3 / 400,
}

export const CLOUD_VIEWWIDTH_MULTIPLIER = 25
export const UPDATE_INTERVAL_MS = 1000 / 60 // milliseconds
export const UPDATE_INTERVAL_S = UPDATE_INTERVAL_MS / 1000

export const LARGEST_CLOUD_RATIO = Math.max(...CLOUD_RATIOS)
export const LARGEST_CLOUD_HEIGHT = LARGEST_CLOUD_RATIO * 50
export const TOP_OFFSET = `-${LARGEST_CLOUD_HEIGHT / 2}vh`

interface ICloud {
  id?: string;
  cloudIndex: number;
  initialLeft: number;
  top: number;
  size?: number;
  distance?: number;
}
