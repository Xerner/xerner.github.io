import { Button, Drawer, Grid, IconButton, SwipeableDrawer, Tooltip } from '@material-ui/core';
import BrightnessIcon from '@material-ui/icons/Brightness4';
import BrightnessHighIcon from '@material-ui/icons/Brightness5';
import { isMobile } from 'functions/isMobile';
import { useEffect, useState } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';

interface ControlsProps {
  darkMode: boolean;
  setDarkMode: Function;
  hasPixelFont: boolean;
  setHasPixelFont: Function;
}

// const drawerWidth = "auto";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//     },
//     drawerPaper: {
//       width: drawerWidth,
//     },
//     content: {
//       flexGrow: 1,
//       backgroundColor: theme.palette.background.default,
//       padding: theme.spacing(3),
//     },
//   })
// );

type Anchor = 'top' | 'left';

export default function Controls(props: ControlsProps) {
  const { darkMode, setDarkMode, hasPixelFont, setHasPixelFont } = props;
  // const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    isMobile();
  });

  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => setOpen(isOpen);

  return (
    <>
    <div style={{top: 4, left: 4, position: "absolute"}}>

        <IconButton onClick={toggleDrawer(!open)}>
          <SettingsIcon fontSize="large"/>
        </IconButton>
    </div>
      <SwipeableDrawer open={open} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)}>
        <div style={{ padding: 4 }}>
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid item>
              <Tooltip title="Dark Mode">
                <IconButton aria-label="toggle dark mode" onClick={() => setDarkMode(!darkMode)}>
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
        </div>
      </SwipeableDrawer>
    </>
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
