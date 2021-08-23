import { Container, Grid, makeStyles, Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import Color from 'color';
import { isMobile } from 'functions/isMobile';
import useIsDarkMode from 'hooks/useIsDarkMode';
import React from 'react';

interface IProjectCardContainer {
	style?: CSSProperties;
	onAnimationEnd?: Function;
	children: JSX.Element[] | JSX.Element;
}

const useStyles = (isMobile: boolean) =>
	makeStyles((theme: Theme) => {
		// const isDarkMode = useIsDarkMode();

		const containerStyle = isMobile
			? {}
			: {
					backgroundColor: Color(theme.palette.background.default)
						.fade(0.5)
						.toString(),
					borderRadius: 25,
					border: `2px solid ${theme.palette.primary.main}`
			  };

		const contentStyle = isMobile
			? {
					margin: '12px 0 12px 0',
					width: '100%',
					padding: '12px 0 0 0'
				}
			: {
					padding: '12px 12px 12px 0',
					margin: '25px 12px 25px 0'
			  };

		return {
			projectCardContainer: {
				padding: 0,
				minHeight: 400,
				maxHeight: window.innerHeight * 0.7,
				overflow: 'hidden',
				position: 'relative',
				...containerStyle
			},
			content: {
				minHeight: 400 - 24 * 2,
				maxHeight: window.innerHeight * 0.7 - 24 * 2,
				overflowY: 'scroll',
				overflowX: 'hidden',
				...contentStyle
			},
			rowNumber: isMobile
				? {
						width: '1.5rem',
						textAlign: 'center',
						color:
							theme.palette.type === 'dark'
								? '#e8e8e8CC'
								: '#FFFFFFFF'
				  }
				: {
						width: '2.5rem',
						textAlign: 'center',
						color:
							theme.palette.type === 'dark'
								? '#e8e8e8CC'
								: '#080808CC'
				  }
		};
	})();

export default function ProjectCardContainer(props: IProjectCardContainer) {
	const { style, children } = props;

	const classes = useStyles(isMobile());
	const isDarkMode = useIsDarkMode();

	return (
		<div style={{ padding: 24 }}>
			<Container
				maxWidth="md"
				style={{ ...style }}
				className={classes.projectCardContainer} // + ' hidden-scrollbar'
			>
				<div
					className={
						classes.content +
						(isDarkMode
							? ' custom-scrollbar'
							: ' custom-scrollbar-light')
					}
				>
					<Grid
						container
						justifyContent="center"
						alignItems="flex-end"
						spacing={4}
					>
						{React.Children.map(
							children,
							(child: JSX.Element, index: number) => {
								return (
									<Grid
										item
										xs={12}
										key={index}
										style={{
											display: 'flex',
											alignItems: 'center'
										}}
									>
										<div className={classes.rowNumber}>
											{index + 1}
										</div>
										{child}
									</Grid>
								);
							}
						)}
					</Grid>
				</div>
			</Container>
		</div>
	);
}
