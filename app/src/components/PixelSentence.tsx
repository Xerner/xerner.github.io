import { GridSpacing } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useMemo } from "react";
import PixelWord, { PixelWordProps } from "./PixelWord";

export interface PixelSentenceProps {
  sentence: string;
  wordSpacing: GridSpacing;
  letterSpacing: GridSpacing;
  colorMap: {[key: number]: string};
	upperCaseSize: number;
	lowerCaseSize: number;
	animationClasses?: string[];
	rowDelay?: number;
	rowDelayMaxIncrement?: number;
	random?: boolean;
}

export default function PixelSentence(props: PixelSentenceProps) {
  const { sentence, wordSpacing, letterSpacing, ...wordProps } = props;
  // colorMap, upperCaseSize, lowerCaseSize, animationClasses, rowDelay, rowDelayMaxIncrement, random } = props;

  
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
            <PixelWord {...wordProps} word={word} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
