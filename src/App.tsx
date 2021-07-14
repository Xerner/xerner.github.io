import "./App.scss";
import "animate.css";
import {
  Box,
  Button,
  createTheme,
  IconButton,
  ThemeProvider,
  Tooltip,
  useMediaQuery,
} from "@material-ui/core";
import { DateTime } from "luxon";
import React, { useMemo, useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import BrightnessIcon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/Brightness5";
import ProjectCard from "./components/ProjectCard";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { blue, lightBlue, red, pink } from "@material-ui/core/colors";
import MyName from "./components/non-functional/MyName";
import { useCookie } from "hooks/useCookie";

// const animation = "animate__fadeInDownBig";
// const animation = "animate__slow animate__backInLeft";
// const animation = "animate__flip";
// const animation = "animate__fadeInBottomLeft";
// const animation = "animate__faster animate__flipInY";

export default function App() {
  const [darkMode, setDarkMode] = useCookie(
    "darkMode",
    useMediaQuery("(prefers-color-scheme: dark)"),
    { maxAge: 50000 }
  );
  // console.log(typeof darkMode)
  const [hasPixelFont, setHasPixelFont] = useCookie("hasPixelFont", true);
  const [hideOverflow, setHideOverflow] = useState(false);
  const [playAnimation, setPlayAnimation] = useCookie(
    "playAnimation",
    true
  );
  const [animationClasses] = useState(
    playAnimation
      ? [
          "animate__fadeInRight",
          "animate__fadeInLeft",
          "animate__fadeInUp",
          "animate__fadeInDown",
        ]
      : []
  );
  const [rowDelay, setRowDelay] = useState(playAnimation ? 1 : 0);
  const [rowDelayMaxIncrement] = useState(rowDelay * 0.1);
  const [hideContent, setHideContent] = useState(playAnimation ? true : false);
  const [fillerSize, setFillerSize] = useState(playAnimation ? 300 : 100);

  const animationObj = {
    animationClasses: animationClasses,
    rowDelay: rowDelay,
    rowDelayMaxIncrement: rowDelayMaxIncrement,
    hideContent: hideContent,
  };

  var theme = useMemo(
    () =>
      createTheme({
        palette: {
          type: darkMode ? "dark" : "light",
          primary: {
            light: "#757ce8",
            main: "#3f50b5",
            dark: "#002884",
            contrastText: "#fff",
          },
          secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
          },
        },
        typography: {
          fontFamily: hasPixelFont ? "Pixelar Regular W01 Regular" : undefined,
          h3: {
            fontSize: hasPixelFont ? "3.75rem" : "3rem", //3rem
          },
          h5: {
            fontSize: hasPixelFont ? "1.875rem" : "1.5rem", //1.5rem
          },
          body1: {
            fontSize: hasPixelFont ? "1.25rem" : "1rem", //1rem
            lineHeight: hasPixelFont ? "1.5rem" : undefined,
          },
          button: {
            fontSize: hasPixelFont ? "1.3125rem" : "0.875rem", //0.875rem
          },
        },
      }),
    [darkMode, hasPixelFont]
  );

  // This is supposed to go off at the same time the name finishes animating
  // It turns of the bool that is hiding the main content, and shrinks a buffer that allows the name to move upwards
  useMemo(() => {
    if (playAnimation) {
      // var time = DateTime.local().plus({ seconds: 5 }).set({ hour: 0 });
      setPlayAnimation(false);
      // setPlayAnimationOptions({ expires: time.toJSDate() });
      setTimeout(() => {
        setRowDelay(0);
        setHideContent(false);
        setFillerSize(100);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!hideOverflow) document.body.style.overflow = "hidden";

  var root = document.getElementById("root");
  var html = document.getElementById("html");
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
      <Grid
        container
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          marginLeft: 8,
          marginTop: 8,
        }}
        spacing={2}
      >
        <Grid item xs={12}>
          <IconButton
            aria-label="toggle dark mode"
            onClick={() => setDarkMode(!darkMode)}
            title="Toggle dark mode"
          >
            {darkMode ? (
              <BrightnessIcon fontSize="large" />
            ) : (
              <BrightnessHighIcon fontSize="large" />
            )}
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => setHasPixelFont(!hasPixelFont)}
            style={{ width: 64, height: 48 }}
          >
            Font
          </Button>
          {/* <ToggleButton
              value="check"
              selected={hasPixelFont}
              style={{ borderColor: theme.palette.primary.main }}
              onClick={() => setHasPixelFont(!hasPixelFont)}
            >
              Font
            </ToggleButton> */}
        </Grid>
      </Grid>
      <Box
        style={{
          overflow: hideOverflow ? "visible" : "inherit",
        }}
      >
        <Box className="transition" style={{ height: fillerSize }} />
        <MyName {...animationObj} />
        {/* 
██████  ██████   ██████       ██ ███████  ██████ ████████ ███████ 
██   ██ ██   ██ ██    ██      ██ ██      ██         ██    ██      
██████  ██████  ██    ██      ██ █████   ██         ██    ███████ 
██      ██   ██ ██    ██ ██   ██ ██      ██         ██         ██ 
██      ██   ██  ██████   █████  ███████  ██████    ██    ███████ 
*/}
        {!hideContent && (
          <Box
            className="animate__animated animate__fadeInUpBig"
            onAnimationEnd={(e) => {
              setHideOverflow(true);
              // e.currentTarget.className = "";
              document.body.style.overflow = "visible";
            }}
          >
            <Typography
              variant="h3"
              align="center"
              color="primary"
              style={{ margin: "4rem 1rem" }}
            >
              Projects
            </Typography>
            <Container maxWidth="lg">
              <Grid container justifyContent="center" spacing={2}>
                <ProjectCard
                  width={200}
                  href="https://mrmeik.itch.io/smart-city-dashboard"
                  image={{
                    url: "images/smart-city-dashboard.png",
                    alt: "Smart City Dashboard screenshot",
                    title: "Smart City Dashboard",
                  }}
                  name="Smart City Dashboard"
                  desc="A city builder and simulator with the ability to integrate smart technologies in the city"
                  learnMoreUrl=""
                />
              </Grid>
            </Container>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}
