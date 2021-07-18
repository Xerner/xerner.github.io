import './App.scss';
import 'animate.css';
import { useSpring, animated } from 'react-spring';
import {
  Box,
  Button,
  IconButton,
  createTheme,
  ThemeProvider,
  Tooltip,
  useMediaQuery
} from '@material-ui/core';
import React, { useEffect, useMemo, useState } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import ProjectCard from './components/ProjectCard';
import CssBaseline from '@material-ui/core/CssBaseline';
import MyName from './components/MyName';
import Controls from './components/Controls';
import { useCookie } from 'hooks/useCookie';
import GitHubIcon from '@material-ui/icons/GitHub';
import ShareIcon from '@material-ui/icons/Share';
import GameJamIcon from '@material-ui/icons/SportsEsports';
// import ItchIoIcon from './components/icons/ItchIo'
// const animation = "animate__fadeInDownBig";
// const animation = "animate__slow animate__backInLeft";
// const animation = "animate__flip";
// const animation = "animate__fadeInBottomLeft";
// const animation = "animate__faster animate__flipInY";

const animationDelay = 2000;

export default function App() {
  const [darkMode, setDarkMode] = useCookie(
    'darkMode',
    useMediaQuery('(prefers-color-scheme: dark)'),
    { maxAge: 50000 }
  );
  const [hasPixelFont, setHasPixelFont] = useCookie('hasPixelFont', true);
  const [hideOverflow, setHideOverflow] = useState(false);
  const [playAnimation, setPlayAnimation] = useCookie('playAnimation', true);
  const [hideContent, setHideContent] = useState(playAnimation ? true : false);

  var theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
          primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff'
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000'
          }
        },
        typography: {
          fontFamily: hasPixelFont ? 'Pixelar Regular W01 Regular' : undefined,
          h3: {
            fontSize: hasPixelFont ? '3.75rem' : '3rem' //3rem
          },
          h5: {
            fontSize: hasPixelFont ? '1.875rem' : '1.5rem' //1.5rem
          },
          body1: {
            fontSize: hasPixelFont ? '1.25rem' : '1rem', //1rem
            lineHeight: hasPixelFont ? '1.5rem' : undefined
          },
          button: {
            fontSize: hasPixelFont ? '1.3125rem' : '0.875rem' //0.875rem
          }
        }
      }),
    [darkMode, hasPixelFont]
  );

  // Entrance animation
  // This is supposed to go off at the same time the name finishes animating
  // It turns of the bool that is hiding the main content, and shrinks a buffer that allows the name to move upwards
  useEffect(() => {
    if (playAnimation) {
      setTimeout(() => {
        setHideContent(false);
        // setPlayAnimationOptions({ maxAge: 5000 });
        setPlayAnimation(false);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  if (!hideOverflow) document.body.style.overflow = 'hidden';

  var root = document.getElementById('root');
  var html = document.getElementById('html');
  if (root) root.style.backgroundColor = theme.palette.background.default;
  if (html) html.style.backgroundColor = theme.palette.background.default;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/*
 ██████  ██████  ███    ██ ████████ ██████   ██████  ██      ███████ 
██      ██    ██ ████   ██    ██    ██   ██ ██    ██ ██      ██      
██      ██    ██ ██ ██  ██    ██    ██████  ██    ██ ██      ███████ 
██      ██    ██ ██  ██ ██    ██    ██   ██ ██    ██ ██           ██ 
 ██████  ██████  ██   ████    ██    ██   ██  ██████  ███████ ███████ 
*/}
      <Controls
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        hasPixelFont={hasPixelFont}
        setHasPixelFont={setHasPixelFont}
      />
      <Box
        style={{
          overflow: hideOverflow ? 'visible' : 'inherit'
        }}
      >
        {/* <Box className="transition" style={{ height: fillerSize }} /> */}
        <MyName playAnimation={playAnimation} />
        {/* 
██████  ██████   ██████       ██ ███████  ██████ ████████ ███████ 
██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██      
██████  ██████  ██    ██      ██ █████   ██         ██    ███████ 
██      ██   ██ ██    ██ ██   ██ ██      ██         ██         ██ 
██      ██   ██  ██████   █████  ███████  ██████    ██    ███████ 
*/}
        {!hideContent && (
          <>
            <Box
              className="animate__animated animate__fadeInUpBig"
              onAnimationEnd={(e) => {
                setHideOverflow(true);
                // e.currentTarget.className = "";
                document.body.style.overflow = 'visible';
              }}
            >
              <Typography
                variant="h3"
                align="center"
                color="primary"
                style={{ margin: '4rem 1rem' }}
              >
                Projects
              </Typography>
              <Container maxWidth="lg">
                <Grid container justifyContent="center" alignItems="flex-end" spacing={2}>
                  <ProjectCard
                    image={{
                      url: 'images/smart-city-dashboard.png',
                      alt: 'Smart City Dashboard screenshot',
                      title: 'Smart City Dashboard'
                    }}
                    name="Smart City Dashboard"
                    subtitle="Unity | Senior Project"
                    desc="A city builder and simulator with the ability to integrate smart technologies in the city"
                    iconButtons={[
                      <Tooltip title="Itch.io page" color="primary" arrow>
                        <IconButton
                          color="primary"
                          href="https://mrmeik.itch.io/smart-city-dashboard"
                        >
                          <GameJamIcon />
                        </IconButton>
                      </Tooltip>,
                      <Tooltip title="Github" color="primary" arrow>
                        <IconButton
                          color="primary"
                          href="https://github.com/Xerner/OU-Game-Jam-2021"
                        >
                          <GitHubIcon />
                        </IconButton>
                      </Tooltip>,
                      <Tooltip title="Share" color="primary" arrow>
                        <IconButton color="primary">
                          <ShareIcon />
                        </IconButton>
                      </Tooltip>
                    ]}
                  />

                  <ProjectCard
                    image={{
                      url: 'images/steamy-bot.png',
                      alt: 'Smart City Dashboard screenshot',
                      title: 'Smart City Dashboard',
                      imageFit: 'contain'
                    }}
                    name="Steamy Bot"
                    subtitle="Discord Bot"
                    desc="A Discord music bot that plays songs from youtube"
                    iconButtons={[
                      <Tooltip title="Github" color="primary" arrow>
                        <IconButton color="primary" href="https://github.com/Xerner/steamy-bot">
                          <GitHubIcon />
                        </IconButton>
                      </Tooltip>,
                      <Tooltip title="Share" color="primary" arrow>
                        <IconButton color="primary">
                          <ShareIcon />
                        </IconButton>
                      </Tooltip>
                    ]}
                  />

                  <ProjectCard
                    image={{
                      url: 'images/pokemon.png',
                      alt: 'Smart City Dashboard screenshot',
                      title: 'Smart City Dashboard',
                      imageFit: 'cover'
                    }}
                    name="Pokemon Battler"
                    subtitle="GameMaker Studio 2"
                    desc="An autochess style Pokemon battler with a centralized multiplayer server "
                    iconButtons={[
                      <Tooltip title="Pokebattler Server" color="primary" arrow>
                        <IconButton color="primary" href="https://github.com/Xerner/pokebattler-server">
                          <GitHubIcon />
                        </IconButton>
                      </Tooltip>,
                      <Tooltip title="Pokebattler Client" color="primary" arrow>
                        <IconButton color="primary" href="https://github.com/Xerner/pokebattler">
                          <GitHubIcon />
                        </IconButton>
                      </Tooltip>,
                      <Tooltip title="Share" color="primary" arrow>
                        <IconButton color="primary">
                          <ShareIcon />
                        </IconButton>
                      </Tooltip>
                    ]}
                  />
                </Grid>
              </Container>
            </Box>
            {/* 
 ██████   █████  ███    ███ ███████          ██  █████  ███    ███ ███████ 
██       ██   ██ ████  ████ ██               ██ ██   ██ ████  ████ ██      
██   ███ ███████ ██ ████ ██ █████            ██ ███████ ██ ████ ██ ███████ 
██    ██ ██   ██ ██  ██  ██ ██          ██   ██ ██   ██ ██  ██  ██      ██ 
 ██████  ██   ██ ██      ██ ███████      █████  ██   ██ ██      ██ ███████ 
*/}

            <Box
              className="animate__animated animate__fadeInUpBig"
              onAnimationEnd={(e) => {
                setHideOverflow(true);
                // e.currentTarget.className = "";
                document.body.style.overflow = 'visible';
              }}
            >
              <Typography
                variant="h3"
                align="center"
                color="primary"
                style={{ margin: '4rem 1rem' }}
              >
                Game Jams
              </Typography>

              <Container maxWidth="lg">
                <Grid container justifyContent="center" spacing={2}>
                  <ProjectCard
                    image={{
                      url: 'images/deepspace.png',
                      alt: 'Deepspace icon',
                      title: 'Deepspace',
                      imageFit: 'contain'
                    }}
                    name="Deepspace"
                    subtitle="48 hour Game Jam!"
                    desc="A daring battle between a space engineer and an evil robot"
                    iconButtons={[
                      <Tooltip title="Oakland University 2021 Game Jam!" color="primary" arrow>
                        <IconButton
                          color="primary"
                          href="https://itch.io/jam/ou-winter-2021-game-jam/entries"
                        >
                          <GameJamIcon />
                        </IconButton>
                      </Tooltip>,
                      <Tooltip title="Github" color="primary" arrow>
                        <IconButton
                          color="primary"
                          href="https://github.com/Xerner/OU-Game-Jam-2021"
                        >
                          <GitHubIcon />
                        </IconButton>
                      </Tooltip>,
                      <Tooltip title="Share" color="primary" arrow>
                        <IconButton color="primary">
                          <ShareIcon />
                        </IconButton>
                      </Tooltip>
                    ]}
                  />
                </Grid>
              </Container>
            </Box>
            <footer>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Tooltip title="My Github" color="primary" arrow>
                    <IconButton
                      href="https://github.com/Xerner"
                    >
                      <GitHubIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </footer>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
}
