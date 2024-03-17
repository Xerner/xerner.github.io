import { IconButton, Tooltip } from '@material-ui/core';
import { CSSProperties } from 'react';
import BrightnessIcon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/Brightness5';
import { toggleDarkMode, selectDarkMode } from 'features/themeSlice';
import { useAppSelector, useAppDispatch } from 'hooks/reduxHooks';

interface DarkModeControlProps {
	id: string;
	style?: CSSProperties;
	className?: string;
}

export default function DarkModeControl(props: DarkModeControlProps) {
	const { id, style, className } = props;
    const dispatch = useAppDispatch()
    const isDarkMode = useAppSelector(selectDarkMode)

	const size = 10; //window.innerWidth * 0.1;
	const sizeVW = `${size}vw`;
	const fontSize = `${size / 4}vw`;

	return (
		<div id={id} style={{ display: 'inline-block', ...style }} className={className}>
			<Tooltip title="Toggle Dark Mode">
				<div
					style={{
						width: sizeVW,
						height: sizeVW
					}}
				>
					{isDarkMode ? (
						<IconButton
							style={{
								height: sizeVW,
								width: sizeVW,
								color: '#8E9EA5',
								position: 'absolute'
							}}
							onClick={() => dispatch(toggleDarkMode({}))}
						>
							<BrightnessIcon style={{ fontSize: fontSize }} />
						</IconButton>
					) : (
						<IconButton
							style={{
								height: sizeVW,
								width: sizeVW,
								color: 'orange',
								fontSize: fontSize,
								position: 'absolute'
							}}
							onClick={() => dispatch(toggleDarkMode({}))}
						>
							<BrightnessHighIcon style={{ fontSize: fontSize }} />
						</IconButton>
					)}

					<img
						src={isDarkMode ? 'images/backgrounds/moon.png' : 'images/backgrounds/sun.png'}
						alt="Dark Mode Controller"
						style={{
							width: sizeVW,
							height: sizeVW
						}}
					/>
				</div>
			</Tooltip>
		</div>
	);
}
