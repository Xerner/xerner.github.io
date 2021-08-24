import Pixel from "./Pixel";
import { useMemo } from "react";

export interface IPixelBitmapOptions {
  pixelSize: number | string;
  colorMap: { [key: number]: string };
  animate?: boolean;
  animationClasses?: string | string[];
  random?: boolean;
  rowDelay?: number;
  rowDelayMaxIncrement?: number;
}

interface PixelBitmapProps extends IPixelBitmapOptions {
  bitmap: number[][];
}

export default function PixelBitmap(props: PixelBitmapProps) {
  const {
    bitmap,
    pixelSize,
    colorMap,
    animationClasses,
    rowDelay,
    rowDelayMaxIncrement,
    random,
    ...other
  } = props;
  const _pixelSize: number = typeof pixelSize === "string" ? calculatePixelSize(pixelSize) : pixelSize
  const rows = bitmap.length;
  const columns = bitmap[0].length;
  const width = columns * _pixelSize;
  const height = rows * _pixelSize;
  
  const content = useMemo(() => {
    var delay = calculateInitialDelay(rowDelay);
    return (
      <div
        style={{ width: width, height: height, position: "relative" }}
        {...other}
      >
        {bitmap.map((row: number[], rowIndex: number) => {
          return row.map((bit: number, index: number) => {
            if (rowDelay !== undefined) {
              if (random) {
                var increment = calculateRandomIncrement(rowDelayMaxIncrement)
                delay = rowDelay + increment;
              } else {
                delay += rowDelay; // increment naturally
              }
            }
            var animationClasses2 = Array.isArray(animationClasses)
              ? animationClasses[
                  Math.floor(Math.random() * animationClasses.length)
                ]
              : animationClasses;
            return (
              <Pixel
                key={index}
                x={index}
                y={rowIndex}
                pixelSize={_pixelSize}
                fill={colorMap[bit]}
                wait={delay}
                animationClasses={
                  animationClasses && "animate__animated " + animationClasses2
                }
              />
            );
          });
        })}
      </div>
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return content;
}

function calculateRandomIncrement(maxIncrement: number | undefined) {
  if (maxIncrement !== undefined) {
    return maxIncrement * Math.random();
  } else {
    return 1 * Math.random();
  }
}

function calculateInitialDelay(rowDelay: number | undefined) {
  if (rowDelay !== undefined && rowDelay !== 0) {
    return rowDelay;
  } else {
    return 0;
  }
}

function calculatePixelSize(pixelSize: string): number {
  var percentage: string = pixelSize.substring(0, pixelSize.length);
  var numPercentage: number = parseFloat(percentage)/100;
  return window.innerWidth * numPercentage;
}