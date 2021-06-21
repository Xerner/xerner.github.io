import React from "react";
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

// const animation = "animate__slow animate__backInLeft";
// const animation = "animate__slow animate__flip";
const animation = "animate__slow animate__flipInY";

const colorMap: { [key: number]: string } = {
  0: "#00000000",
  1: "#5f5fc4",
  2: "#001064",
};


export default function Portfolio() {
  return (
    <Box m={6}>
      <Grid container justify="center" spacing={10}>
        <Grid item>
          <PixelBitmap bitmap={alphabet.K} pixelSize={20} colormap={colorMap} className={animation} rowDelay={10}/>
        </Grid>
        <Grid item>
          <PixelBitmap bitmap={alphabet.M} pixelSize={20} colormap={colorMap} className={animation} rowDelay={10}/>
        </Grid>
      </Grid>
      <Typography variant="h5" align="center" style={{ padding: "6rem" }}>
        Projects
      </Typography>
    </Box>

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
