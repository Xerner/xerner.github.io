import { IconButton, Tooltip } from '@material-ui/core';
import { CSSProperties } from 'react';
import BrightnessIcon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/Brightness5';

interface DarkModeControlProps {
	id: string;
	isDarkMode: boolean;
	onClick: Function;
	style?: CSSProperties;
	className?: string;
}

export default function DarkModeControl(props: DarkModeControlProps) {
	const { id, isDarkMode, onClick, style, className } = props;

	const handleClick = () => onClick(!isDarkMode);

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
							onClick={handleClick}
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
							onClick={handleClick}
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
