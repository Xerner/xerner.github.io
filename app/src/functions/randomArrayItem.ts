import { randomInt } from "./randomInt";

export function randomArrayItem<T>(array: T[]) {
	return array[randomInt(array.length)];
}