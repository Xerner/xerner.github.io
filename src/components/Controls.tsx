import {
  Button,
  createStyles,
  Drawer,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Tooltip,
	useTheme,
} from "@material-ui/core";
import BrightnessIcon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/Brightness5";

interface ControlsProps {
  darkMode: boolean;
  setDarkMode: Function;
  hasPixelFont: boolean;
  setHasPixelFont: Function;
}

const drawerWidth = "auto";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

export default function Controls(props: ControlsProps) {
  const classes = useStyles();
  const { darkMode, setDarkMode, hasPixelFont, setHasPixelFont } = props;

  return (
    <Drawer variant="permanent" anchor="left">
      <Grid
        container
        direction="column"
				alignItems="center"
        spacing={1}
				style={{padding: 4}}
      >
        <Grid item>
          <Tooltip title="Dark Mode">
            <IconButton
              aria-label="toggle dark mode"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <BrightnessIcon fontSize="large" />
              ) : (
                <BrightnessHighIcon fontSize="large" />
              )}
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Button
            onClick={() => setHasPixelFont(!hasPixelFont)}
            style={{ width: 64, height: 48 }}
          >
            Font
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );

  // {/* <Grid
  // 	container
  // 	style={{
  // 		position: "fixed",
  // 		left: 0,
  // 		top: 0,
  // 		marginLeft: 8,
  // 		marginTop: 8,
  // 	}}
  // 	spacing={2}
  // >
  // 	<Grid item xs={12}>
  // 		<Tooltip title="Dark Mode">
  // 			<IconButton
  // 				aria-label="toggle dark mode"
  // 				onClick={() => setDarkMode(!darkMode)}
  // 			>
  // 				{darkMode ? (
  // 					<BrightnessIcon fontSize="large" />
  // 				) : (
  // 					<BrightnessHighIcon fontSize="large" />
  // 				)}
  // 			</IconButton>
  // 		</Tooltip>
  // 	</Grid>
  // 	<Grid item xs={12}>
  // 		<Button
  // 			onClick={() => setHasPixelFont(!hasPixelFont)}
  // 			style={{ width: 64, height: 48 }}
  // 		>
  // 			Font
  // 		</Button>
  // 	</Grid>
  // </Grid> */}
}
