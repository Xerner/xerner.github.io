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

	const handleClick = () => {
		onClick(!isDarkMode);
	};

	const size = window.innerWidth * 0.1;

	return (
		<div style={{ ...style }}>
			<Tooltip title="Toggle Dark Mode">
				<div
					style={{
						width: size,
						height: size
					}}
				>
					{isDarkMode ? (
						<IconButton
							style={{
								height: size,
								width: size,
								color: '#8E9EA5',
								position: 'absolute'
							}}
							onClick={handleClick}
						>
							<BrightnessIcon style={{ fontSize: size / 4 }} />
						</IconButton>
					) : (
						<IconButton
							style={{
								height: size,
								width: size,
								color: 'orange',
								fontSize: size / 4,
								position: 'absolute'
							}}
							onClick={handleClick}
						>
							<BrightnessHighIcon style={{ fontSize: size / 4 }} />
						</IconButton>
					)}

					<img
						src={isDarkMode ? 'images/moon.png' : 'images/sun-1080.png'}
						alt="Dark Mode Controller"
						className={className}
						style={{
							width: size,
							height: size
						}}
					/>
				</div>
			</Tooltip>
		</div>
	);
}
