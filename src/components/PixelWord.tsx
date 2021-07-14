import { Grid } from "@material-ui/core";
import alphabet from "../graphics/bitmaps/alphabetMap";
import PixelBitmap from "./PixelBitmap";

export interface PixelWordProps {
	word: string;
	colorMap: {[key: number]: string};
	upperCaseSize: number;
	lowerCaseSize: number;
	animationClasses?: string[];
	rowDelay?: number;
	rowDelayMaxIncrement?: number;
	random?: boolean;
}

// const bigLetterSize = 15;
// const smallLetterSize = 8;

export default function PixelWord(props: PixelWordProps) {
	const { word, colorMap, animationClasses, rowDelay, rowDelayMaxIncrement, random } = props;

  return (
		<>
      {word.split('').map((char: string, index: number) =>
				<Grid key={index} item>
					<PixelBitmap
						bitmap={alphabet[char]}
						pixelsize={index === 0 ? props.upperCaseSize : props.lowerCaseSize}
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
