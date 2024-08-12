interface IDictionary {
	[index: string]: number[][];
}

const alphabet: IDictionary = {
	a: [
		[0, 1, 1, 0, 0],
		[1, 0, 0, 1, 0],
		[1, 0, 0, 1, 0],
		[1, 0, 0, 1, 0],
		[0, 1, 1, 0, 1]
	],
	d: [
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 0, 0, 1],
		[0, 1, 1, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[0, 1, 1, 1],
	],
	K: [
		[1, 0, 0, 0, 1],
		[1, 0, 0, 1, 0],
		[1, 0, 1, 0, 0],
		[1, 1, 0, 0, 0],
		[1, 0, 1, 0, 0],
		[1, 0, 0, 1, 0],
		[1, 0, 0, 0, 1]
	],
	e: [
		[0, 1, 1, 1, 0],
		[1, 0, 0, 0, 1],
		[1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0],
		[0, 1, 1, 1, 1]
	],
	n: [
		[1, 0, 1, 1, 0],
		[1, 1, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1]
	],
	t: [
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 1],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 0],
		[0, 0, 1]
	],
	h: [
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 0, 0, 0],
		[1, 1, 1, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 0, 0, 1]
	],
	M: [
		[1, 0, 0, 0, 1],
		[1, 1, 0, 1, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1]
	]
};

export default alphabet;