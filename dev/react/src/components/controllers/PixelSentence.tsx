import { GridSpacing } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { IDictionary } from "interfaces/interfaces";
import { useMemo } from "react";
import { IPixelBitmapOptions } from "./PixelBitmap";
import PixelWord from "./PixelWord";

export interface PixelSentenceProps extends IPixelBitmapOptions {
  pixelMap: IDictionary;
  pixelSize: number;
  sentence: string;
  wordSpacing: GridSpacing;
  letterSpacing: GridSpacing;
  img?: string;
}

export default function PixelSentence(props: PixelSentenceProps) {
  const { pixelMap, sentence, wordSpacing, letterSpacing, pixelSize, colorMap, img, ...rest } = props;

  
  const sentenceArr = useMemo(() => {
    return sentence.split(" ");
  }, [sentence]);

  return (
    <Grid container justifyContent="center" spacing={wordSpacing}>
      {sentenceArr.map((word, index) => (
        <Grid item key={index}>
          <Grid
            container
            justifyContent="center"
            spacing={letterSpacing}
            alignItems="baseline"
          >
            <PixelWord pixelMap={pixelMap} pixelSize={pixelSize} word={word} colorMap={colorMap} {...rest} img={img} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
