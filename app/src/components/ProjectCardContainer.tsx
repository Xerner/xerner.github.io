import { Container, Grid, makeStyles, Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import Color from 'color';

interface IProjectCardContainer {
  style?: CSSProperties;
  onAnimationEnd?: Function;
  children?: JSX.Element[];
}

const useStyles = makeStyles((theme: Theme) => {
  // const isDarkMode = useIsDarkMode();
  return {
    projectCardContainer: {
      backgroundColor: Color(theme.palette.background.default).fade(0.5).toString(),
      minHeight: 400,
      // height: window.innerHeight * 0.7,
      maxHeight: window.innerHeight * 0.7,
      overflow: 'scroll',
      padding: 25,
      borderRadius: 25,
      border: `2px solid ${theme.palette.primary.main}`,
      // transition: "all 1s linear",
      // '&:hover': {
      //   border: `2px solid ${theme.palette.secondary.main}`,
      // }
    }
    
  };
});

export default function ProjectCardContainer(props: IProjectCardContainer) {
  const { style, children } = props;
  const classes = useStyles();

  return (
    <Container
      maxWidth="lg"
      style={{ ...style }}
      className={classes.projectCardContainer+' hidden-scrollbar'}
    >
      <div>

      </div>
      <Grid
        container
        justifyContent="center"
        alignItems="flex-end"
        spacing={4}
      >
        {children}
      </Grid>
    </Container>
  );
}
