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

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, props.wait || 0);
    // return () => {
    // 	clearTimeout(timer);
    // }
  });

  // return !hidden ? <rect width="1" height="1" shapeRendering="crispEdges" {...props} /> : <></>;
  return !hidden ? (
    <div
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
    />
  ) : (
    <></>
  );
}
