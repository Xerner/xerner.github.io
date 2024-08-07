export default function blur() {
	(document.activeElement as HTMLElement).blur();
}

/**
 * ```
 * /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
 * ```
 * @returns Whether or not the ```navigator.userAgent``` contains a mobile OS
 */
export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
