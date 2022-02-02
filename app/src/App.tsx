import 'animate.css';
import { Box, Typography, ThemeProvider, useMediaQuery } from '@material-ui/core';
// import { IconButton, Tooltip, Grid } from '@material-ui/core';
import { useEffect, useMemo } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MyName from './components/Name/MyName';
import { useCookie } from 'hooks/useCookie';
import { neonTheme } from 'themes/neonTheme';
import DarkModeControl from 'components/DarkModeControl';
import Stars from 'components/Stars/Stars';
import ScrollCarousel from 'components/ScrollCarousel/ScrollCarousel';
import ProjectCards from 'components/ProjectCard/ProjectCards';
// import GameJamCards from 'components/ProjectCard/GameJamCards';
import Clouds from 'components/Clouds/Clouds';
// import GitHubIcon from '@material-ui/icons/GitHub';
import clsx from 'clsx';

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
	}, [playAnimation, setPlayAnimation]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
				<Box
					id="stars-and-name"
					className="starry-night"
					style={{
						height: '100vh'
					}}
				>
					<MyName playAnimation={false} wait={0} />
					{/* <MyName playAnimation={playAnimation} wait={3000} /> */}
					<Stars numberOfStars={150} maxWait={0} minWait={0} />
				</Box>
				{/* 
  ██████  ██████   ██████       ██ ███████  ██████ ████████ ███████ 
  ██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██      
  ██████  ██████  ██    ██      ██ █████   ██         ██    ███████ 
  ██      ██   ██ ██    ██ ██   ██ ██      ██         ██         ██ 
  ██      ██   ██  ██████   █████  ███████  ██████    ██    ███████ 
*/}
				<Box id="clouds-sun-and-background" style={{ position: 'relative' }}>
					<Box id="dark-mode-control-container" style={{ position: 'absolute' }}>
						<DarkModeControl
							id="dark-mode-control"
							className="dark-mode-control"
							isDarkMode={isDarkMode}
							onClick={setIsDarkMode}
						/>
					</Box>
					<Clouds id="clouds" />
				</Box>
				<Box id="project-cards" style={{ height: '100vh' }}>
					{isDarkMode ? (
						<img className="bg-img" src="images/purple-city-4000-1125.jpg" alt="City background" />
					) : (
						<img className="bg-img" src="images/blue-city-4000-1125.jpg" alt="City background" />
					)}
					<div className="card-container">
						<div style={{ height: "20vh" }}></div>
						<div className={isDarkMode ? 'card card-dark' : 'card card-light'}>
							<Typography className="card-title" variant="h3" align="center" color="primary" style={{ fontFamily: 'futura' }}>
								Projects
							</Typography>

							<ScrollCarousel>{ProjectCards(theme)}</ScrollCarousel>
						</div>
					</div>
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

						
					</Box> */}
				{/* <footer>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Tooltip title="My Github" color="primary" arrow>
								<IconButton href="https://github.com/Xerner">
									<GitHubIcon />
								</IconButton>
							</Tooltip>
						</Grid>
					</Grid>
				</footer> */}
			</Box>
		</ThemeProvider>
	);
}
