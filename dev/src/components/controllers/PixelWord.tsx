import { Grid } from '@material-ui/core';
import { IDictionary } from 'interfaces/interfaces';
import PixelBitmap, { IPixelBitmapOptions } from './PixelBitmap';

export interface PixelWordProps extends IPixelBitmapOptions {
  pixelMap: IDictionary;
  word: string;
  pixelSize: number;
}

export default function PixelWord(props: PixelWordProps) {
  const {
    pixelMap,
    word,
    pixelSize,
    colorMap,
    animationClasses,
    rowDelay,
    rowDelayMaxIncrement,
    randomDelay: random
  } = props;

  return (
    <>
      {word.split('').map((char: string, index: number) => (
        <Grid key={index} item className="rise-anim" style={{ flexWrap: 'nowrap' }}>
          <PixelBitmap
            bitmap={pixelMap[char]}
            pixelSize={pixelSize}
            colorMap={colorMap}
            animationClasses={animationClasses}
            rowDelay={rowDelay}
            rowDelayMaxIncrement={rowDelayMaxIncrement}
            randomDelay={random}
          />
        </Grid>
      ))}
    </>
  );
}
