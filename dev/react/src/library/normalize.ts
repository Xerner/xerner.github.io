import { clamp } from "./clamp"

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