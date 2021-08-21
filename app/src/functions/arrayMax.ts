
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
