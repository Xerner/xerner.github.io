import { IconButton, Tooltip } from '@material-ui/core';
import { CSSProperties } from 'react';
import BrightnessIcon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/Brightness5';

interface DarkModeControlProps {
	isDarkMode: boolean;
	onClick: Function;
	style?: CSSProperties;
	className?: string;
}

export default function DarkModeControl(props: DarkModeControlProps) {
	const { isDarkMode, onClick, style, className } = props;

	const handleClick = () => onClick(!isDarkMode);

	const size = 10; //window.innerWidth * 0.1;
	const sizeVW = `${size}vw`;
	const fontSize = `${size / 4}vw`;

	return (
		<div style={{ display: 'inline-block', ...style }}>
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
						src={isDarkMode ? 'images/moon.png' : 'images/sun-1080.png'}
						alt="Dark Mode Controller"
						className={className}
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
