import { Grid } from "@material-ui/core";
import alphabet from "../graphics/bitmaps/alphabetMap";
import PixelBitmap from "./PixelBitmap";

interface _props {
	word: string;
	colorMap: {[key: number]: string};
	animationClasses?: string[];
	rowDelay?: number;
	rowDelayMaxIncrement?: number;
	upperCaseSize?: number;
	lowerCaseSize?: number;
	random?: boolean;
}

// const bigLetterSize = 15;
// const smallLetterSize = 8;

export default function PixelWord(props: _props) {
	const { word, colorMap, animationClasses, rowDelay, rowDelayMaxIncrement, random } = props;

  return (
		<>
      {word.split('').map((char: string, index: number) =>
				<Grid key={index} item>
					<PixelBitmap
						bitmap={alphabet[char]}
						pixelsize={index === 0 ? props.upperCaseSize || 15  : props.lowerCaseSize || 8}
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
