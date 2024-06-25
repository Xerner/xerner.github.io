export function clamp(value: number, lower: number, upper: number): number {
	if (value < lower) {
		return lower
	} else if (value > upper) {
		return upper;
	} else {
		return value;
	}
}

export function randomInt(exclusiveMax: number): number {
	return Math.floor(Math.random()  * exclusiveMax);
}

/**
 *
 * @param array An array of numbers
 * @returns The maximum value in the array
 */
export function arrayMax(array: number[]) {
  return array.reduce(function (a: number, b: number) {
    return Math.max(a, b);
  }, 0);
}

export function normalize(value: number, min: number, max: number, alwaysPositive: boolean = false): number {
    if (alwaysPositive) {
        return clamp(value - min, 0, Number.MAX_SAFE_INTEGER) / (max - min);
    }
    return (value - min) / (max - min);
}

export function denormalize(value: number, min: number, max: number, alwaysPositive: boolean = false): number {
    if (alwaysPositive) {
        return clamp(value * (max - min) + min, 0, Number.MAX_SAFE_INTEGER);
    }
    return value * (max - min) + min;
}

export function addPercentageStrings(percent1: string, percent2: string) {
  const percent1Num = parseInt(percent1.replace('%', ''));
  const percent2Num = parseInt(percent2.replace('%', ''));
  const sum = percent1Num + percent2Num;
  return `${sum}%`;
}

export function toPercentageString(num: number) {
  return `${num * 100}%`;
}

export function percentToNumber(percent: string) {
  const percentAsNumber: number = parseInt(percent.replace('%', '')) / 100;
  return percentAsNumber;
}
