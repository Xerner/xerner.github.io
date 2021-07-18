import { Box, CardMedia, Grid, Link, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

interface _props {
  name: string;
  subtitle: string;
  desc: JSX.Element | string;
  width?: number;
  image?: imageProps;
  iconButtons?: JSX.Element[];
}

interface imageProps {
  url: string;
  alt?: string;
  title?: string;
  imageFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 300,
      borderBottom: `4px solid ${
        theme.palette.type === 'dark' ? 'purple' : theme.palette.primary.light
      }`
      // boxShadow: `0 5px 0px ${
      //   theme.palette.type === "dark"
      //     ? "rgb(159, 31, 239, 0.6)"
      //     : "rgb(0, 0, 0, 0.2)"
      // } !important`,
      // "&:hover": {
      //   boxShadow: `0 8px 15px 3px ${
      //     theme.palette.type === "dark"
      //       ? "rgb(159, 31, 239, 0.6)"
      //       : "rgb(0, 0, 0, 0.2)"
      //   } !important`,
      // },
    },
    media: {
      backgroundColor: "gainsboro",
    },
    title: {
      fontSize: 24,
      marginBottom: 4,
    },
    subtitle: {
      marginBottom: 12,
    },
  })
);

export default function ProjectCard(props: _props) {
  const { name, subtitle, desc, image, iconButtons } = props;

  const classes = useStyles();

  return (
    <Grid item className="rise-anim">
      <Card className={classes.root}>
        {image ? (
          <CardMedia
            component="img"
            className={classes.media}
            alt={image.alt}
            height={140}
            width={300}
            image={image.url}
            title={image.title}
            style={{objectFit: image.imageFit ? image.imageFit : "cover"}}
          />
        ) : (
          <Box style={{ height: 140, paddingTop: 70 }}>
            <Typography color="textSecondary" align="center">
              No Image
            </Typography>
          </Box>
        )}
        <CardContent>
          <Typography className={classes.title}>
            {name}
          </Typography>
          <Typography className={classes.subtitle} color="textSecondary">
            {subtitle}
          </Typography>
          <Typography variant="body1" component="p">
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
          {iconButtons !== undefined && (
            <Grid container justifyContent="flex-end" alignContent="center">
              {iconButtons.map((iconButton) => (
                <Grid item>{iconButton}</Grid>
              ))}
            </Grid>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
