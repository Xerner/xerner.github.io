import { useCallback, useRef, useState } from "react";

interface _props {
	initialFont: Font;
}

enum Font {
  Pixel,
	Normal,
}

export default function useFont (initialFont?: Font) {
	var fontType: Font = initialFont !== undefined ? initialFont : Font.Normal
  const [font, setFont] = useState(fontType);
	const resetRef = useRef(0);

  // look here 👇
  const reset = useCallback(() => {
		setFont(fontType)
		resetRef.current++;
  }, [fontType])
        
  return {
    font,
    setFont,
		reset,
		resetDep: resetRef.current
  };
}