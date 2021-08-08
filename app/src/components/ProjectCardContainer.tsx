import { Container, Grid, makeStyles, Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import Color from 'color';
import React from 'react';

interface IProjectCardContainer {
  style?: CSSProperties;
  onAnimationEnd?: Function;
  children?: JSX.Element[] | JSX.Element;
}

const useStyles = makeStyles((theme: Theme) => {
  // const isDarkMode = useIsDarkMode();
  return {
    projectCardContainer: {
      backgroundColor: Color(theme.palette.background.default).fade(0.5).toString(),
      padding: '12px 12px 12px 0',
      borderRadius: 25,
      border: `2px solid ${theme.palette.primary.main}`,
      // // /* width */
      // '::-webkit-scrollbar': {
      //   width: '20px'
      // },
      // // /* Track */
      // '::-webkit-scrollbar-track': {
      //   boxShadow: 'inset 0 0 5px grey',
      //   borderRadius: '10px'
      // },
      // // /* Handle */
      // '::-webkit-scrollbar-thumb': {
      //   background: 'red',
      //   borderRadius: '10px'
      // },
      // // /* Handle on hover */
      // '::-webkit-scrollbar-thumb:hover': {
      //   background: '#b30000'
      // },
      overflowY: 'visible',
      overflowX: 'hidden'
    },
    content: {
      padding: '12px 12px 12px 0',
      margin: '12px 0 12px 0',
      minHeight: 400,
      // height: window.innerHeight * 0.7,
      maxHeight: window.innerHeight * 0.7,
      overflowY: 'scroll',
      overflowX: 'hidden',
      zIndex: 10
    },
    rowNumber: {
      width: '2.5rem',
      textAlign: 'center',
      color: '#e8e8e8CC'
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
      className={classes.projectCardContainer} // + ' hidden-scrollbar'
    >
      <div className={classes.content + ' custom-scrollbar'}>
        <Grid container justifyContent="center" alignItems="flex-end" spacing={4}>
          {React.Children.map(children, (child, index) => {
            return (
              <Grid item xs={12} key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <div className={classes.rowNumber}>{index}</div>
                {child}
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
}
