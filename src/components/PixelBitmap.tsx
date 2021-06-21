import Svg from "./Svg";
import Pixel from "./Pixel";
import React from "react";

interface PixelProps {
  bitmap: number[][];
  pixelSize: number;
  colormap: { [key: number]: string };
  animate?: boolean;
  className?: string | string[][];
  rowDelay?: number;
}

export default function PixelBitmap(props: PixelProps) {
  const { bitmap, pixelSize, colormap, className, rowDelay, ...other} = props;
  const rows = bitmap.length;
  const columns = bitmap[0].length;
  const width = columns * pixelSize;
  const height = rows * pixelSize;
  var delay = rowDelay ? 1 + rowDelay : 0;

  return (
    <div style={{width: width, height: height, position: "relative"}} {...other}>
      {bitmap.map((row: number[], rowIndex: number) => {
        return row.map((bit: number, index: number) => {
          if (rowDelay) delay += rowDelay;
          var className2 = Array.isArray(className) ? className[rowIndex][index] : className;
          return (
            <Pixel
              key={index}
              x={index}
              y={rowIndex}
              pixelSize={pixelSize}
              fill={colormap[bit]}
              wait={delay}
              className={
                className && "animate__animated " + className2
              }
            />
          );
        });
      })}
    </div>
    // <Svg width={240} height={320} viewBox={`0 0 ${rows} ${columns}`}>
    //   {bitmap.map((row: number[], rowIndex: number) => {
    //     return row.map((bit: number, index: number) => {
    //       if (rowDelay) delay += rowDelay;
    //       var className2 = Array.isArray(className) ? className[rowIndex][index] : className;
    //       return (
    //         <Pixel
    //           key={index}
    //           x={index}
    //           y={rowIndex}
    //           fill={colormap[bit]}
    //           wait={delay}
    //           className={
    //             className && "animate__animated " + className2
    //           }
    //         />
    //       );
    //     });
    //   })}
    // </Svg>
  );
}
