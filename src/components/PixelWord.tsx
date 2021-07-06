import { Grid } from "@material-ui/core";
import alphabet from "../graphics/bitmaps/alphabetMap";
import PixelBitmap from "./PixelBitmap";

interface _props {
	word: string;
	colorMap: {[key: number]: string};
	animationMap?: string[];
	rowDelay?: number;
}

const bigLetterPixelSize = 15;
const smallLetterPixelSize = 8;

export default function PixelWord(props: _props) {
	const { word, colorMap, animationMap, rowDelay } = props;

  return (
		<>
      {word.split('').map((char: string, index: number) =>
				<Grid key={index} item>
					<PixelBitmap
						bitmap={alphabet[char]}
						pixelSize={index === 0 ? bigLetterPixelSize : smallLetterPixelSize}
						colormap={colorMap}
						className={animationMap}
						rowDelay={rowDelay}
						random
					/>
				</Grid>
			)}
    </>
  );
}
