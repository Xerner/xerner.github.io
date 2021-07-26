import { Grid } from "@material-ui/core";
import alphabet from "../graphics/bitmaps/alphabetMap";
import PixelBitmap from "./PixelBitmap";

export interface PixelWordProps {
	word: string;
	upperCaseSize: number;
	lowerCaseSize: number;
	colorMap: {[key: number]: string};
	animationClasses?: string[];
	rowDelay?: number;
	rowDelayMaxIncrement?: number;
	random?: boolean;
}

// const bigLetterSize = 15;
// const smallLetterSize = 8;

export default function PixelWord(props: PixelWordProps) {
	const { word, upperCaseSize, lowerCaseSize, colorMap, animationClasses, rowDelay, rowDelayMaxIncrement, random } = props;

  return (
		<>
      {word.split('').map((char: string, index: number) =>
				<Grid key={index} item className="rise-anim" style={{flexWrap: "nowrap"}}>
					<PixelBitmap
						bitmap={alphabet[char]}
						pixelsize={index === 0 ? upperCaseSize : lowerCaseSize}
						colormap={colorMap}
						animationClasses={animationClasses}
						rowDelay={rowDelay}
						rowDelayMaxIncrement={rowDelayMaxIncrement}
						random={random}
					/>
				</Grid>
			)}
    </>
  );
}
