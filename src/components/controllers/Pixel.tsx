import Delayable from 'components/controllers/Delayable';
import React from 'react';

export interface PixelProps {
    x: number;
    y: number;
    pixelSize: number;
    fill: string;
    animationClasses?: string;
    wait?: number;
    img?: string;
}

export default function Pixel(props: PixelProps) {
    const { x, y, pixelSize, fill, animationClasses, wait, img } = props;
    var ref = React.createRef<HTMLDivElement>();
    var contents
    // If img is undefined, use a div with a background color
    if (img === undefined) {
        contents = (
            <div
                ref={ref}
                onAnimationEnd={
                    animationClasses
                        ? () => {
                              if (ref.current) ref.current.className = 'pixel';
                          }
                        : undefined
                }
                style={{
                    width: pixelSize,
                    height: pixelSize,
                    backgroundColor: fill,
                    position: 'absolute',
                    paddingTop: y !== 0 ? -pixelSize : 0,
                    left: x * pixelSize,
                    top: y * pixelSize
                }}
                className={animationClasses + ' pixel'}
            />
        );
    // If img is provided, use the img
    } else {
        contents = (
            <div
                ref={ref}
                onAnimationEnd={
                    animationClasses && fill === '#dddddd'
                        ? () => {
                              if (ref.current) ref.current.className = '';
                          }
                        : undefined
                }
                className={fill === '#dddddd' ? animationClasses + ' pixel' : 'pixel'}
                style={{
                    position: 'absolute',
                    left: x * pixelSize,
                    top: y * pixelSize,
                    paddingTop: y !== 0 ? -pixelSize : 0,
                    opacity: fill === '#dddddd' ? 1 : 0
                }}
            >
                <img src={img} alt={img} />
            </div>
        );
    }

    return <Delayable wait={wait !== undefined ? wait : 0}>{contents}</Delayable>;
}
