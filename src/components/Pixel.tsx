import React from 'react';
import { CSSProperties, ReactEventHandler, useEffect, useState } from "react";
import { clearTimeout } from "timers";

interface PixelProps {
  x: number;
  y: number;
  pixelSize: number;
  fill: string;
  className?: string;
  style?: object;
  wait?: number;
}

export default function Pixel(props: PixelProps) {
  const [hidden, setHidden] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, props.wait || 0);
    // return () => {
    // 	clearTimeout(timer);
    // }
  });

  var ref = React.createRef<HTMLDivElement>();
  
  // return !hidden ? <rect width="1" height="1" shapeRendering="crispEdges" {...props} /> : <></>;
  return !hidden ? (
    <div
      ref={ref}
      onAnimationEnd={() => { if (ref.current) ref.current.className = ""; setHasAnimated(true); }}
      style={{
        width: props.pixelSize,
        height: props.pixelSize,
        backgroundColor: props.fill,
				position: "absolute",
				paddingTop: props.y !== 0 ? -props.pixelSize : 0,
				left: props.x * props.pixelSize,
				top: props.y * props.pixelSize,
      }}
			{...props}
      className={hasAnimated ? "" : props.className }
    />
  ) : (
    <></>
  );
}
