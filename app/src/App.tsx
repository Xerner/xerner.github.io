import 'animate.css';
import { Box, IconButton, ThemeProvider, Tooltip, useMediaQuery } from '@material-ui/core';
import { useEffect, useMemo } from 'react';
import { Grid, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MyName from './components/MyName';
import Controls from './components/Controls';
import { useCookie } from 'hooks/useCookie';
import { neonTheme } from 'themes/neonTheme';
//import ProjectCardContainer from 'components/ProjectCardContainer';
import DarkModeControl from 'components/DarkModeControl';
import Stars from 'components/Stars/Stars';
import ScrollCarousel from 'components/ScrollCarousel';
import ProjectCards from 'components/ProjectCard/ProjectCards';
import GameJamCards from 'components/ProjectCard/GameJamCards';
import Clouds from 'components/Clouds';
import GitHubIcon from '@material-ui/icons/GitHub';
import WindowContext from 'context/window';
import useWindow from 'hooks/useWindow';

export default function App() {
	const [isDarkMode, setIsDarkMode] = useCookie('darkMode', useMediaQuery('(prefers-color-scheme: dark)'), { maxAge: 50000 });
	const [playAnimation, setPlayAnimation] = useCookie('playAnimation', true);
	const theme = useMemo(() => neonTheme(isDarkMode), [isDarkMode]);

	// Entrance animation
	// This is supposed to go off at the same time the name finishes animating
	// It turns of the bool that is hiding the main content, and shrinks a buffer that allows the name to move upwards
	useEffect(() => {
		document.body.classList.add('main-scrollbar');
		if (playAnimation) {
			setTimeout(() => {
				// setPlayAnimationOptions({ maxAge: 5000 });
				setPlayAnimation(false);
			}, 2000);
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
				<Box
					className="starry-night"
					style={{
						height: window.innerHeight
					}}
				>
					<MyName playAnimation={false} wait={0} />
					{/* <MyName playAnimation={playAnimation} wait={3000} /> */}
					<Stars maxWait={0} minWait={0} />
				</Box>
				<Clouds />

				{/*
 ██████  ██████  ███    ██ ████████ ██████   ██████  ██      ███████ 
██      ██    ██ ████   ██    ██    ██   ██ ██    ██ ██      ██      
██      ██    ██ ██ ██  ██    ██    ██████  ██    ██ ██      ███████ 
██      ██    ██ ██  ██ ██    ██    ██   ██ ██    ██ ██           ██ 
 ██████  ██████  ██   ████    ██    ██   ██  ██████  ███████ ███████ 
*/}

				{/* <Controls darkMode={isDarkMode} setDarkMode={setIsDarkMode} /> */}
				{/* 
  ██████  ██████   ██████       ██ ███████  ██████ ████████ ███████ 
  ██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██      
  ██████  ██████  ██    ██      ██ █████   ██         ██    ███████ 
  ██      ██   ██ ██    ██ ██   ██ ██      ██         ██         ██ 
  ██      ██   ██  ██████   █████  ███████  ██████    ██    ███████ 
  className={isDarkMode ? 'night-sky' : 'day-sky'}
  */}
				<Box>
					<Box style={{ position: 'relative', width: '100%', overflowX: 'clip', overflowY: 'visible' }}>
						{isDarkMode ? (
							<img
								src="images/purple-city-4000-1125.jpg"
								alt="City background"
								style={{ position: 'absolute', zIndex: -10 }}
								height={window.innerHeight}
							/>
						) : (
							<img
								src="images/blue-city-4000-1125.jpg"
								alt="City background"
								style={{ position: 'absolute', zIndex: -10 }}
								height={window.innerHeight}
							/>
						)}
						<DarkModeControl
							isDarkMode={isDarkMode}
							onClick={setIsDarkMode}
							style={{
								position: 'relative',
								top: window.innerWidth * 0.05,
								left: window.innerWidth * 0.05
							}}
						/>
						<Typography variant="h3" align="center" color="primary" style={{ padding: '2%', fontFamily: 'futura' }}>
							Projects
						</Typography>

						<ScrollCarousel
							cardWidth={700}
							spacing={12}
							style={{ marginBottom: 24 }}
							itemStyle={{ paddingTop: 12, paddingBottom: 12 }}
						>
							{ProjectCards(theme)}
						</ScrollCarousel>
					</Box>
				</Box>
				{/* 
 ██████   █████  ███    ███ ███████          ██  █████  ███    ███ ███████ 
██       ██   ██ ████  ████ ██               ██ ██   ██ ████  ████ ██      
██   ███ ███████ ██ ████ ██ █████            ██ ███████ ██ ████ ██ ███████ 
██    ██ ██   ██ ██  ██  ██ ██          ██   ██ ██   ██ ██  ██  ██      ██ 
 ██████  ██   ██ ██      ██ ███████      █████  ██   ██ ██      ██ ███████ 
*/}
				{/* <Box>
						<Typography variant="h3" align="center" color="primary" style={{ padding: '2%', fontFamily: 'futura' }}>
							Game Jams
						</Typography>

						<ScrollCarousel
							cardWidth={700}
							spacing={12}
							//style={{ backgroundColor: '#00000044' }}
							itemStyle={{ paddingTop: 12, paddingBottom: 12 }}
						>
							{GameJamCards(theme)}
						</ScrollCarousel>

						<footer>
							<Grid container justifyContent="flex-end">
								<Grid item>
									<Tooltip title="My Github" color="primary" arrow>
										<IconButton href="https://github.com/Xerner">
											<GitHubIcon />
										</IconButton>
									</Tooltip>
								</Grid>
							</Grid>
						</footer>
					</Box> */}
			</Box>
		</ThemeProvider>
	);
}
