import React from "react";
import { useEffect, useState } from "react";

interface PixelProps {
  x: number;
  y: number;
  pixelsize: number;
  fill: string;
  animationClasses?: string;
  wait?: number;
  ref?: React.RefObject<HTMLDivElement>;
}

export default function Pixel(props: PixelProps) {
  const { x, y, pixelsize, fill, animationClasses, wait } = props
  const [hidden, setHidden] = useState(props.wait && true);

  useEffect(() => {
    if (wait) {
      setTimeout(() => {
        setHidden(false);
      }, wait || 0);
      // return () => {
      // 	clearTimeout(timer);
      // }
    }
  });

  var ref = React.createRef<HTMLDivElement>();

  // return !hidden ? <rect width="1" height="1" shapeRendering="crispEdges" {...props} /> : <></>;
  return !hidden ? (
    <div
      ref={ref}
      onAnimationEnd={animationClasses ? () => {
        if (ref.current) ref.current.className = "";
      } : undefined}
      style={{
        width: pixelsize,
        height: pixelsize,
        backgroundColor: fill,
        position: "absolute",
        paddingTop: y !== 0 ? -pixelsize : 0,
        left: x * pixelsize,
        top: y * pixelsize,
      }}
      className={animationClasses}
    />
  ) : (
    <></>
  );
}
