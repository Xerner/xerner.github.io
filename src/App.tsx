import "./App.css";
import "./bootstrap.css";
import "animate.css";
import {
  Box,
  createMuiTheme,
  IconButton,
  ThemeProvider,
  Tooltip,
  useMediaQuery,
} from "@material-ui/core";
import { DateTime } from "luxon";
import Cookies from "js-cookie"; // @ts-ignore: Unreachable code error
import React, { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import ProjectCard from "./components/ProjectCard";
import BrightnessIcon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import ToggleButton from "@material-ui/lab/ToggleButton";
import PixelWord from "./components/PixelWord";

//#region animation stuff

// var animation = [
//   "animate__fadeInRightBig",
//   "animate__fadeInLeftBig",
//   "animate__fadeInUpBig",
//   "animate__fadeInDownBig",
// ];
// const animation = "animate__fadeInDownBig";
// const animation = "animate__slow animate__backInLeft";
// const animation = "animate__flip";
// const animation = "animate__fadeInBottomLeft";
// const animation = "animate__faster animate__flipInY";

const colorMap: { [key: number]: string } = {
  0: "#00000000",
  1: "#5f5fc4",
  2: "#001064",
};

//#endregion

export default function App() {
  const [hideOverflow, setHideOverflow] = useState(false);
  const [config, setConfig] = React.useState({
    hasPixelFont: true,
    darkMode: useMediaQuery('(prefers-color-scheme: dark)'),
  });
  const [animationConfig, setAnimationConfig] = React.useState({
    rowDelay: Cookies.get("playAnimation") === "true" ? 10 : 0,
    animationMap:
      Cookies.get("playAnimation") === "true"
        ? [
            "animate__fadeInRight",
            "animate__fadeInLeft",
            "animate__fadeInUp",
            "animate__fadeInDown",
          ]
        : [],
    hideContent: Cookies.get("playAnimation") === "true" ? true : false,
    fillerSize: Cookies.get("playAnimation") === "true" ? 300 : 100,
  });

  // Config state handler
  const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, [event.target.name]: event.target.checked });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({ ...config, [event.target.name]: event.target.value });
  };
  const toggleDarkMode = () => setConfig({ ...config, darkMode: !config.darkMode});

  const toggleFont = () =>
    setConfig({ ...config, hasPixelFont: !config.hasPixelFont });

  // This is supposed to go off at the same time the name finishes animating
  // It turns of the bool that is hiding the main content, and shrinks a buffer that allows the name to move upwards
  React.useEffect(() => {
    if (Cookies.get("playAnimation") === "true") {
      var time = DateTime.local().plus({ days: 1 }).set({ hour: 0 });
      Cookies.set("playAnimation", "false", { expires: time.toJSDate() });
      console.log("here");
      setTimeout(() => {
        setAnimationConfig({
          ...animationConfig,
          hideContent: false,
          fillerSize: 100,
          rowDelay: 0,
        });
      }, 2000);
    } else {
      // Cookies.set("playAnimation", "true");
      // // re-setup animation to play
      // setAnimationConfig({
      //   ...animationConfig,
      //   playAnimation: true,
      //   hideContent: true,
      //   fillerSize: 300,
      //   rowDelay: 10,
      // });
    }
  }, [animationConfig]);

  // calling theme in function because it has some conditional styling
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: config.darkMode ? "dark" : "light",
          primary: {
            light: "#5f5fc4",
            main: "#283593",
            dark: "#001064",
            contrastText: "#ffffff",
          },
          background: {
            default: config.darkMode ? "#212529" : "#fafafa",
          },
        },
        typography: {
          fontFamily: config.hasPixelFont ? "pixelfont" : undefined,
          h3: {
            fontSize: config.hasPixelFont ? "4.5rem" : "3rem",
            // lineHeight: config.hasPixelFont ? 1 : 1.5,
          },
          h5: {
            fontSize: config.hasPixelFont ? "2.25rem" : "1.5rem",
            // lineHeight: config.hasPixelFont ? 1 : 1.5,
          },
          body1: {
            fontSize: config.hasPixelFont ? "1.5rem" : "1rem",
            // lineHeight: config.hasPixelFont ? 1 : 1.5,
          },
          button: {
            fontSize: config.hasPixelFont
              ? "1.25rem !important"
              : "0.875rem !important",
          },
        },
      }),
    [config]
  );

  // const classes = useStyles();

  if (!hideOverflow) document.body.style.overflow = "hidden";

  return (
    <ThemeProvider theme={theme}>
      <div
        className={config.hasPixelFont ? "pixelfont-lh" : "normal-lh"}
        style={{
          backgroundColor: theme.palette.background.default,
          overflow: hideOverflow ? "visible" : "inherit",
        }}
      >
        <div
          className="transition"
          style={{ height: animationConfig.fillerSize }}
        ></div>
        <div style={{ padding: 40 }}>
          {/* 
███    ███ ██    ██     ███    ██  █████  ███    ███ ███████ 
████  ████  ██  ██      ████   ██ ██   ██ ████  ████ ██      
██ ████ ██   ████       ██ ██  ██ ███████ ██ ████ ██ █████   
██  ██  ██    ██        ██  ██ ██ ██   ██ ██  ██  ██ ██      
██      ██    ██        ██   ████ ██   ██ ██      ██ ███████ 
*/}
          <Grid container justify="center" spacing={10} className="transition">
            <Grid item>
              <Grid
                container
                justify="center"
                spacing={2}
                alignItems="baseline"
              >
                <PixelWord word="Kenneth" colorMap={colorMap} />
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                justify="center"
                spacing={2}
                alignItems="baseline"
              >
                <PixelWord word="Mead" colorMap={colorMap} />
              </Grid>
            </Grid>
          </Grid>
        </div>
{/*
 ██████  ██████  ███    ██ ████████ ██████   ██████  ██      ███████ 
██      ██    ██ ████   ██    ██    ██   ██ ██    ██ ██      ██      
██      ██    ██ ██ ██  ██    ██    ██████  ██    ██ ██      ███████ 
██      ██    ██ ██  ██ ██    ██    ██   ██ ██    ██ ██           ██ 
 ██████  ██████  ██   ████    ██    ██   ██  ██████  ███████ ███████ 
 */}
        <div>
          <Grid container style={{ position: "fixed", left: 0, top: 0, marginLeft: 8, marginTop: 8}} spacing={2}>
            <Grid item>
            <Tooltip title="Change font style">
              <ToggleButton
                value="check"
                selected={config.hasPixelFont}
                style={{ borderColor: theme.palette.primary.main }}
                onChange={toggleFont}
              >
                {config.hasPixelFont ? 'Normal Font' : 'Pixel Font'}
              </ToggleButton>
            </Tooltip>
            </Grid>
            <Grid item>
            <Tooltip title="Toggle dark mode">
              <IconButton aria-label="toggle dark mode" onClick={toggleDarkMode}>
                {config.darkMode ? <BrightnessIcon fontSize="large"/> : <BrightnessHighIcon fontSize="large"/>}
              </IconButton>
            </Tooltip>
            </Grid>
          </Grid>
        </div>
        {!animationConfig.hideContent && (
          <div
            className="animate__animated animate__fadeInUpBig"
            onAnimationEnd={() => {
              setHideOverflow(true);
              document.body.style.overflow = "visible";
            }}
          >
            <Typography
              variant="h3"
              align="center"
              color="primary"
              className="pixelfont"
              style={{ padding: "1rem" }}
            >
              Projects
            </Typography>
            <Container maxWidth="lg">
              <Grid container justify="center" spacing={2}>
                <ProjectCard
                  width={200}
                  href="https://mrmeik.itch.io/smart-city-dashboard"
                  image={{
                    url: "src\\graphics\\project-images\\smart-city-dashboard.png",
                  }}
                  name="Smart City Dashboard"
                  desc="A city builder and simulator with the ability to integrate smart technologies in the city"
                />
              </Grid>
            </Container>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}
