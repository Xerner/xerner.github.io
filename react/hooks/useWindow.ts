import { useEffect, useState } from "react";

// TRY  AND  USE  CONTEXT HERE  INSTEAD
export default function useWindow() {
	const [_window, setWindow] = useState<Window & typeof globalThis>()

	useEffect(() => {
		setWindow(window);
	}, [_window])
	
	return _window;
}
