import Pixel from "./Pixel";
import React, { useMemo } from "react";

interface PixelProps {
  bitmap: number[][];
  pixelsize: number;
  colormap: { [key: number]: string };
  animate?: boolean;
  animationClasses?: string | string[];
  rowDelay?: number;
  rowDelayMaxIncrement?: number;
  random?: boolean;
}

export default function PixelBitmap(props: PixelProps) {
  const {
    bitmap,
    pixelsize,
    colormap,
    animationClasses,
    rowDelay,
    rowDelayMaxIncrement,
    random,
    ...other
  } = props;
  const rows = bitmap.length;
  const columns = bitmap[0].length;
  const width = columns * pixelsize;
  const height = rows * pixelsize;
  const content = useMemo(() => {
    var delay = rowDelay && rowDelay !== 0 ? 1 + rowDelay : 0;
    return (
      <div
        style={{ width: width, height: height, position: "relative" }}
        {...other}
      >
        {bitmap.map((row: number[], rowIndex: number) => {
          return row.map((bit: number, index: number) => {
            if (rowDelay) {
              if (random) {
                var increment = (rowDelayMaxIncrement ? rowDelayMaxIncrement : 1) * Math.random()
                delay = rowDelay + increment;
              } else {
                delay += rowDelay;
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
                pixelsize={pixelsize}
                fill={colormap[bit]}
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
