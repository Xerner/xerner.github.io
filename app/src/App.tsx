import './App.scss';
import 'animate.css';
import { Box, IconButton, ThemeProvider, Tooltip, useMediaQuery } from '@material-ui/core';
import React, { useEffect, useMemo, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ProjectCard from './components/ProjectCard';
import CssBaseline from '@material-ui/core/CssBaseline';
import MyName from './components/MyName';
import Controls from './components/Controls';
import { useCookie } from 'hooks/useCookie';
import GitHubIcon from '@material-ui/icons/GitHub';
import ShareIcon from '@material-ui/icons/Share';
import GameJamIcon from '@material-ui/icons/SportsEsports';
import { neonTheme } from 'themes/neonTheme';
import ProjectCardContainer from 'components/ProjectCardContainer';
// import ItchIoIcon from './components/icons/ItchIo'

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

  const theme = useMemo(() => neonTheme(darkMode), [darkMode]);

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

  if (!hideOverflow) document.body.style.overflowX = 'hidden';

  document.body.classList.add('hidden-scrollbar');

  var root = document.getElementById('root');
  root?.classList.add('hidden-scrollbar');
  // var html = document.getElementById('html');
  // if (root) root.style.background = "linear-gradient(90deg, hsla(216, 76%, 42%, 1) 0%, hsla(214, 41%, 71%, 1) 100%) !important;";//theme.palette.background.default;
  // if (html) html.style.background = "linear-gradient(90deg, hsla(216, 76%, 42%, 1) 0%, hsla(214, 41%, 71%, 1) 100%) !important;";//theme.palette.background.default;

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
        // hasPixelFont={hasPixelFont}
        // setHasPixelFont={setHasPixelFont}
      />

      {/* 
  ██████  ██████   ██████       ██ ███████  ██████ ████████ ███████ 
  ██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██      
  ██████  ██████  ██    ██      ██ █████   ██         ██    ███████ 
  ██      ██   ██ ██    ██ ██   ██ ██      ██         ██         ██ 
  ██      ██   ██  ██████   █████  ███████  ██████    ██    ███████ 
  */}
      <Box
        style={{
          height: window.innerHeight,
          padding: 25
        }}
        className={darkMode ? 'night-sky' : 'day-sky'}
      >
        <MyName playAnimation={playAnimation} />
        {!hideContent && (
          <>
            <Box
              className="animate__animated animate__fadeInUpBig"
              onAnimationEnd={() => {
                setHideOverflow(true);
                document.body.style.overflow = 'visible';
              }}
            >
              <Typography variant="h3" align="center" color="primary" style={{ padding: '24px 0' }}>
                Projects
              </Typography>

              <ProjectCardContainer>
                <ProjectCard
                  repo={{ name: 'Smart-City-Dashboard', owner: 'Jaren-Taylor' }}
                  image={{
                    url: 'images/smart-city-dashboard.png',
                    alt: 'Smart City Dashboard screenshot',
                    title: 'Smart City Dashboard'
                  }}
                  name="Smart City Dashboard"
                  subtitle="City Simulation | Senior Project"
                  chips={['Unity', 'C#', 'Google Maps API', 'Agile', 'Determination']}
                  desc="A city builder and simulator with the ability to integrate smart technologies in the city"
                  iconButtons={[
                    <Tooltip title="Itch.io page" color="primary" arrow>
                      <IconButton
                        style={{ color: theme.palette.primary.light }}
                        href="https://mrmeik.itch.io/smart-city-dashboard"
                      >
                        <GameJamIcon />
                      </IconButton>
                    </Tooltip>,
                    <Tooltip title="Github" color="primary" arrow>
                      <IconButton
                        style={{ color: theme.palette.primary.light }}
                        href="https://github.com/Xerner/OU-Game-Jam-2021"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Tooltip>,
                    <Tooltip title="Share" color="primary" arrow>
                      <IconButton style={{ color: theme.palette.primary.light }}>
                        <ShareIcon />
                      </IconButton>
                    </Tooltip>
                  ]}
                />

                <ProjectCard
                  repo={{ name: 'steamy-bot', owner: 'Xerner' }}
                  image={{
                    url: 'images/steamy-bot.png',
                    alt: 'Smart City Dashboard screenshot',
                    title: 'Smart City Dashboard'
                  }}
                  name="Steamy Bot"
                  subtitle="Discord Bot"
                  chips={['Node.js', 'Discord.js']}
                  desc="Yet another Discord music bot that plays songs from youtube"
                  iconButtons={[
                    <Tooltip title="Github" color="primary" arrow>
                      <IconButton
                        style={{ color: theme.palette.primary.light }}
                        href="https://github.com/Xerner/steamy-bot"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Tooltip>,
                    <Tooltip title="Share" color="primary" arrow>
                      <IconButton style={{ color: theme.palette.primary.light }}>
                        <ShareIcon />
                      </IconButton>
                    </Tooltip>
                  ]}
                />

                <ProjectCard
                  isPrivate
                  repo={{ name: 'pokebattler', owner: 'Xerner' }}
                  image={{
                    url: 'images/pokemon.png',
                    alt: 'Pokemon screenshot',
                    title: 'Pokemon'
                  }}
                  name="Pokemon Battler"
                  subtitle="Video Game"
                  chips={['GameMaker Studio 2', 'MongoDB', 'Mongoose', 'Node.js', 'TCP/IP']}
                  desc="An autochess style Pokemon battler with a centralized multiplayer server"
                  iconButtons={[
                    <Tooltip title="Pokebattler Client" color="primary" arrow>
                      <IconButton
                        style={{ color: theme.palette.primary.light }}
                        href="https://github.com/Xerner/pokebattler"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Tooltip>,
                    <Tooltip title="Pokebattler Server" color="primary" arrow>
                      <IconButton
                        style={{ color: theme.palette.primary.light }}
                        href="https://github.com/Xerner/pokebattler-server"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </Tooltip>,
                    <Tooltip title="Share" color="primary" arrow>
                      <IconButton style={{ color: theme.palette.primary.light }}>
                        <ShareIcon />
                      </IconButton>
                    </Tooltip>
                  ]}
                />

                <ProjectCard
                  isPrivate
                  repo={{ name: '', owner: 'Xerner' }}
                  image={{
                    url: '',
                    alt: '',
                    title: ''
                  }}
                  name="Work Request System"
                  subtitle="React Front-End"
                  chips={['React', 'Bootstrap', 'Material UI', 'IIS']}
                  desc="A mockup front-end work request management system"
                  iconButtons={[
                    <Tooltip title="Share" color="primary" arrow>
                      <IconButton style={{ color: theme.palette.primary.light }}>
                        <ShareIcon />
                      </IconButton>
                    </Tooltip>
                  ]}
                />

                <ProjectCard
                  isPrivate
                  repo={{ name: '', owner: 'Xerner' }}
                  image={{
                    url: '',
                    alt: '',
                    title: ''
                  }}
                  name="Carbon Canister Working Capacity Testing Analysis"
                  subtitle="Data Mining & Analysis"
                  chips={['C#', '.Net 4.6.5', 'Windows Form', 'Excel']}
                  desc="Data mining, analysis, and reporting of carbon canister GWC or BWC testing"
                  iconButtons={[
                    <Tooltip title="Share" color="primary" arrow>
                      <IconButton style={{ color: theme.palette.primary.light }}>
                        <ShareIcon />
                      </IconButton>
                    </Tooltip>
                  ]}
                />

                <ProjectCard
                  isPrivate
                  repo={{ name: '', owner: 'Xerner' }}
                  image={{
                    url: '',
                    alt: '',
                    title: ''
                  }}
                  name="Excel Pareto Chart Generator"
                  subtitle="Excel VBA Addin"
                  chips={['Excel', 'VBA']}
                  desc="Quick and easy way for an Excel user to generate a Pareto chart with table-structured data"
                  iconButtons={[
                    <Tooltip title="Share" color="primary" arrow>
                      <IconButton style={{ color: theme.palette.primary.light }}>
                        <ShareIcon />
                      </IconButton>
                    </Tooltip>
                  ]}
                />
              </ProjectCardContainer>
            </Box>
          </>
        )}
      </Box>
      <Box
        style={{
          height: '1440px'
        }}
        className="dirt"
      >
        {/* 
 ██████   █████  ███    ███ ███████          ██  █████  ███    ███ ███████ 
██       ██   ██ ████  ████ ██               ██ ██   ██ ████  ████ ██      
██   ███ ███████ ██ ████ ██ █████            ██ ███████ ██ ████ ██ ███████ 
██    ██ ██   ██ ██  ██  ██ ██          ██   ██ ██   ██ ██  ██  ██      ██ 
 ██████  ██   ██ ██      ██ ███████      █████  ██   ██ ██      ██ ███████ 
*/}

        <Box>
          <Typography variant="h3" align="center" color="primary" style={{ padding: '4rem 1rem' }}>
            Game Jams
          </Typography>

          <ProjectCardContainer>
            <ProjectCard
              repo={{ name: 'OU-Game-Jam-2021', owner: 'Xerner' }}
              image={{
                url: 'images/deepspace.png',
                alt: 'Deepspace icon',
                title: 'Deepspace'
              }}
              name="Deepspace"
              subtitle="Unity | 48 hour Game Jam!"
              chips={['Test']}
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
                    style={{ color: theme.palette.primary.light }}
                    href="https://github.com/Xerner/OU-Game-Jam-2021"
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>,
                <Tooltip title="Share" color="primary" arrow>
                  <IconButton style={{ color: theme.palette.primary.light }}>
                    <ShareIcon />
                  </IconButton>
                </Tooltip>
              ]}
            />
          </ProjectCardContainer>
        </Box>
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
      </Box>
    </ThemeProvider>
  );
}
