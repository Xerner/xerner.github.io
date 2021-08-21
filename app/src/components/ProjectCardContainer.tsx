import { Container, Grid, makeStyles, Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import Color from 'color';
import useIsDarkMode from 'hooks/useIsDarkMode';
import React from 'react';

interface IProjectCardContainer {
  style?: CSSProperties;
  onAnimationEnd?: Function;
  children: JSX.Element[] | JSX.Element;
}

const useStyles = makeStyles((theme: Theme) => {
  // const isDarkMode = useIsDarkMode();
  return {
    projectCardContainer: {
      backgroundColor: Color(theme.palette.background.default).fade(0.5).toString(),
      borderRadius: 25,
      padding: 0,
      border: `2px solid ${theme.palette.primary.main}`,
      minHeight: 400,
      // height: window.innerHeight * 0.7,
      maxHeight: window.innerHeight * 0.7,
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
      overflow: 'hidden'
    },
    content: {
      padding: '12px 12px 12px 0',
      margin: '25px 12px 25px 0',
      minHeight: 400-(24*2),
      // height: window.innerHeight * 0.7,
      maxHeight: (window.innerHeight * 0.7)-(24*2),
      overflowY: 'scroll',
      overflowX: 'hidden',
      zIndex: 10
    },
    rowNumber: {
      width: '2.5rem',
      textAlign: 'center',
      color: theme.palette.type === 'dark' ? '#e8e8e8CC' : '#080808CC'
    }
  };
});

export default function ProjectCardContainer(props: IProjectCardContainer) {
  const { style, children } = props;
  const classes = useStyles();
  const isDarkMode = useIsDarkMode()

  return (
    <Container
      maxWidth="md"
      style={{ ...style }}
      className={classes.projectCardContainer} // + ' hidden-scrollbar'
    >
      <div className={classes.content + (isDarkMode ? ' custom-scrollbar' : ' custom-scrollbar-light')}>
        <Grid container justifyContent="center" alignItems="flex-end" spacing={4}>
          {React.Children.map(children, (child: JSX.Element, index: number) => {
            return (
              <Grid item xs={12} key={index} style={{ display: 'flex', alignItems: 'center' }}>
                <div className={classes.rowNumber}>{index+1}</div>
                {child}
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Container>
  );
}
