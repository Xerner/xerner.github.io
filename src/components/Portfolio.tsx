import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import PixelBitmap from "./PixelBitmap";
import alphabet from '../graphics/bitmaps/alphabetMap.js';

var animation = [
  "animate__fadeInRightBig",
  "animate__fadeInLeftBig",
  "animate__fadeInUpBig",
  "animate__fadeInDownBig",
];
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

export default function Portfolio() {
  const [hidden, setHidden] = useState(true);
  const [fillerSize, setFillerSize] = useState(300);

  setTimeout(() => {
    setHidden(false);
    setFillerSize(100);
    animation = [""];
  }, 4000);

  return (
    <div style={{}}>
      <div className="transition" style={{height: fillerSize}}></div>
      <Grid container justify="center" spacing={10} className="transition">
        <Grid item>
          <Grid container justify="center" spacing={2} alignItems="baseline">
            <Grid item>
              <PixelBitmap bitmap={alphabet.K} pixelSize={20} colormap={colorMap} className={animation} rowDelay={10} random/>
            </Grid>
            <Grid item>
              <PixelBitmap bitmap={alphabet.e} pixelSize={10} colormap={colorMap} className={animation} rowDelay={10} random/>
            </Grid>
            <Grid item>
              <PixelBitmap bitmap={alphabet.n} pixelSize={10} colormap={colorMap} className={animation} rowDelay={10} random/>
            </Grid>
            <Grid item>
              <PixelBitmap bitmap={alphabet.n} pixelSize={10} colormap={colorMap} className={animation} rowDelay={10} random/>
            </Grid>
            <Grid item>
              <PixelBitmap bitmap={alphabet.e} pixelSize={10} colormap={colorMap} className={animation} rowDelay={10} random/>
            </Grid>
            <Grid item>
              <PixelBitmap bitmap={alphabet.t} pixelSize={10} colormap={colorMap} className={animation} rowDelay={10} random/>
            </Grid>
            <Grid item>
              <PixelBitmap bitmap={alphabet.h} pixelSize={10} colormap={colorMap} className={animation} rowDelay={10} random/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="center" spacing={2} alignItems="baseline">
            <Grid item>
              <PixelBitmap bitmap={alphabet.M} pixelSize={20} colormap={colorMap} className={animation} rowDelay={10} random/>
            </Grid>
            <Grid item>
              <PixelBitmap bitmap={alphabet.e} pixelSize={10} colormap={colorMap} className={animation} rowDelay={10} random/>
            </Grid>
            <Grid item>
              <PixelBitmap bitmap={alphabet.a} pixelSize={10} colormap={colorMap} className={animation} rowDelay={10} random/>
            </Grid>
            <Grid item>
              <PixelBitmap bitmap={alphabet.d} pixelSize={10} colormap={colorMap} className={animation} rowDelay={10} random/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {
        !hidden && 
        <div className="animate__animated animate__fadeInUpBig">
          <Typography variant="h3" align="center" color="primary" style={{ padding: "6rem" }}>
            Projects
          </Typography>
        </div>

      }
    </div>
    // <Box m={6}>
    //   <Grid container justify="center" spacing={2}>
    //     <Grid item>
    //       <PixelBitmap bitmap={K} colormap={colorMap} className={animation} rowDelay={10}/>
    //     </Grid>
    //     <Grid item>
    //       <PixelBitmap bitmap={M} colormap={colorMap} className={animation} rowDelay={10}/>
    //     </Grid>
    //   </Grid>
    //   <Typography variant="h5" align="center" style={{ padding: "6rem" }}>
    //     Projects
    //   </Typography>
    // </Box>
  );
}
