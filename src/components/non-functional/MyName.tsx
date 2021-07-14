import { Grid } from "@material-ui/core";
import PixelWord from "../PixelWord";

const colorMap: { [key: number]: string } = {
  0: "#00000000",
  1: "#5f5fc4",
  2: "#001064",
};

export default function MyName(props: any) {
  return (
    <Grid container justifyContent="center" spacing={10} className="transition">
      <Grid item className="inner-element">
        <Grid
          container
          justifyContent="center"
          spacing={2}
          alignItems="baseline"
        >
          <PixelWord
            word="Kenneth"
            colorMap={colorMap}
            {...props}
            upperCaseSize={10}
            lowerCaseSize={5}
          />
        </Grid>
      </Grid>
      <Grid item className="inner-element">
        <Grid
          container
          justifyContent="center"
          spacing={2}
          alignItems="baseline"
        >
          <PixelWord
            word="Mead"
            colorMap={colorMap}
            {...props}
            upperCaseSize={10}
            lowerCaseSize={5}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
