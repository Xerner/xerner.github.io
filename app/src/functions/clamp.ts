
export function clamp(value: number, lower: number, upper: number): number {
	if (value < lower) {
		return lower
	} else if (value > upper) {
		return upper;
	} else {
		return value;
	}
}